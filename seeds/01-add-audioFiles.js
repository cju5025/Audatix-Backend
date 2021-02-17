
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('audioFiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('audioFiles').insert([
        {
          name: 'Alien Ambience 01',
          location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/Alien_Ambiance_01.wav',
          category: 'Film & Game',
          subCategory: 'Machine',
          user_id: 20,
          price: 1
      },
      {
        name: 'Alien Ambience 02',
        location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/Alien_Ambiance_02.wav',
        category: 'Film & Game',
        subCategory: 'Machine',
        user_id: 20,
        price: 1
    },
    {
      name: 'Alien Ambience 03',
      location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/Alien_Ambience_02.wav',
      category: 'Film & Game',
      subCategory: 'Machine',
      user_id: 20,
      price: 1
  },
  {
    name: 'Alien Ambience 04',
    location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/Alien_Ambience_03.wav',
    category: 'Film & Game',
    subCategory: 'Machine',
    user_id: 20,
    price: 1
},
{
  name: 'Alien Texture 01',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/Alien_Texture_01.wav',
  category: 'Film & Game',
  subCategory: 'Machine',
  user_id: 21,
  price: 1
},
{
  name: 'Alien Texture 02',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/Alien_Texture_02.wav',
  category: 'Film & Game',
  subCategory: 'Machine',
  user_id: 21,
  price: 1
},
{
  name: 'Alien Voices 01',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/Alien_Voices_01.wav',
  category: 'Film & Game',
  subCategory: 'Machine',
  user_id: 21,
  price: 1
},
{
  name: 'Dark Textures 01',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/Dark_Textures_01.wav',
  category: 'Film & Game',
  subCategory: 'Machine',
  user_id: 20,
  price: 1
},
{
  name: 'QE Dark Texture 01',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/QE_Dark_Texture_01.wav',
  category: 'Film & Game',
  subCategory: 'Machine',
  user_id: 21,
  price: 1
},
{
  name: 'QE Metallic Burp',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/QE_Impact_long_01.wav',
  category: 'Machine',
  subCategory: 'Electronics',
  user_id: 21,
  price: 1
},
{
  name: 'QE Long Impact 02',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/QE_Impact_long_02.wav',
  category: 'Film & Game',
  subCategory: 'Machine',
  user_id: 21,
  price: 1
},
{
  name: 'QE Long Impact 03',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/QE_Impact_long_03.wav',
  category: 'Machine',
  subCategory: 'Electronics',
  user_id: 21,
  price: 1
},
{
  name: 'QE Short Impact 01',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/QE_Impact_short_01.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 21,
  price: 1
},
{
  name: 'QE Short Impact 02',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/QE_Impact_short_02.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 21,
  price: 1
},
      ]);
    });
};
