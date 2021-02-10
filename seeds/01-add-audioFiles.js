
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('audioFiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('audioFiles').insert([
        {
          name: 'cassette 01',
          location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/1612906908118_Cymatics+-+Eternity+Gear+Foley+1+-+Cassette+Deck+Button.wav',
          category: 'Film & Game',
          subCategory: 'Foley',
          user_id: 15
      },
      {
        name: 'cassette 02',
        location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/1612907351623_Cymatics+-+Eternity+Gear+Foley+2+-+Cassette+Deck+Button.wav',
        category: 'Film & Game',
        subCategory: 'Foley',
        user_id: 15
    },
    {
      name: 'cassette 03',
      location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/1612907359498_Cymatics+-+Eternity+Gear+Foley+3+-+Cassette+Deck+Button.wav',
      category: 'Film & Game',
      subCategory: 'Foley',
      user_id: 14
  },
  {
    name: 'impact',
    location: 'https://www.dropbox.com/h?preview=Impact+001.mp3',
    category: 'Film & Game',
    subCategory: 'Foley',
    user_id: 14
},


      ]);
    });
};
