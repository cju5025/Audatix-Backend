
exports.up = function(knex) {
    return knex.schema.createTable('cartItems', cartItems => {
        cartItems.increments()
        cartItems.integer('userID')
        cartItems.integer('soundID')
        cartItems.integer('price')
        cartItems.integer('soundUploaderID')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cartItems')
};
