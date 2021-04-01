const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const knex = require('knex');
const config = require('./knexfile')['development'];

const database = knex(config);
const { Model } = require('objection');
Model.knex(database)

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const dotENV = require('dotenv');
dotENV.config();


const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const User = require('./Models/User');
const AudioFile = require('./Models/AudioFile');
const CartItem = require('./Models/CartItem');
const PurchasedItem = require('./Models/PurchasedItem');

// *****end of imports*****

const s3 = new aws.S3({
    region: 'us-east-2',
    credentials: {
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        accessKeyId: process.env.ACCESS_KEY_ID
    }
});

const upload = multer({
    storage: multerS3({
        s3,
        bucket: 'audatixaudio',
        key: (request, file, next) => {
            next(null, `wavs/${Date.now()}_${file.originalname}`);
        }
    })
})

app.post('/purchasedItems', (request, response) => {
    const { purchasedItem } = request.body 
    console.log(purchasedItem)
    return database('purchasedItems')
        .insert({
            userID: purchasedItem.userID,
            itemID: purchasedItem.itemID
        }).returning('*')
        .then(purchasedItem => {
            response.json({ purchasedItem })
        })
})

app.get('/purchasedItems', (request, response) => {
    PurchasedItem.query()
        .then(items => response.json({ items }))
})

app.post('/audioFiles', (request, response) => {
    const { audioFile } = request.body
    return database('audioFiles')
        .insert({
            name: audioFile.name,
            location: audioFile.location,
            category: audioFile.category,
            subCategory: audioFile.subCategory,
            user_id: audioFile.user_id,
            price: audioFile.price

        }).returning('*')
        .then(audioFile => {
            response.json({ audioFile })
        })
})

app.delete('/cartitems/:id', (request, response) => {
    const id = request.params.id
    CartItem.query().deleteById(id)
        .then(cartitem => response.json({ cartitem }))
})

app.post('/cartitems', (request, response) => {
    const { cartItem } = request.body
    return database('cartItems')
        .insert({
            userID: cartItem.userID,
            soundID: cartItem.soundID,
            price: cartItem.price,
            soundUploaderID: cartItem.soundUploaderID
        }).returning('*')
        .then(cartItem => {
            response.json({ cartItem })
        })
})

app.get('/cartItems', (request, response) => {
    CartItem.query()
        .then(items => response.json({ items }))
})

app.get('/sounds/:id', (request, response) => {
    const id = request.params.id
    AudioFile.query().findById(id)
        .then(file => response.json({ file }))
})

app.get('/sounds', (request, response) => {
    AudioFile.query()
        .then(files => response.json({ files }))
})

app.post("/upload", upload.single("file"), (request, response) => {
    response.json({data: request.file.location});
})

app.get('/users', (request, response) => {
    User.query()
        .then(users => {
            response.json({ users })
        })
})

app.get('/users/:id', (request, response) => {
    const id = request.params.id 
    User.query().findById(id)
        .then(user => response.json({ user }))
})

app.post('/users', (request, response) => {
    const { user } = request.body
    bcrypt.hash(user.password, 12)
        .then(hashedPassword => {
            return database('users')
                .insert({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    email: user.email,
                    password: hashedPassword
                }).returning('*')
            })
                .then(users => {
                    const user = users[0]
                    response.json({ user })
                }).catch(error => response.json(error.message))
})

app.post('/login', (request, response) => {
    const { user } = request.body

    database('users')
        .select()
        .where({ email: user.email })
        .first()
        .then(retrievedUser => {
            if (!retrievedUser) throw new Error('User not found')

            return Promise.all([
                bcrypt.compare(user.password, retrievedUser.password),
                Promise.resolve(retrievedUser)
            ])
        }).then(results => {
            const arePasswordsTheSame = results[0]
            const user = results[1]

            if (!arePasswordsTheSame) throw new Error("Incorrect username or password")

            const payload = { username: user.username }
            const secret = process.env.JWT_SECRET

            jwt.sign(payload, secret, (error, token) => {
                if (error) throw new Error("Signing didn't work")
                response.json({ user, token })
            })
        }).catch(error => response.json(error.message))
})


app.listen(4000)
