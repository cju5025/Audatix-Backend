
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
{
  name: 'Industrial Lever Pump 01',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/zapsplat_industrial_lever_pump_metal_old_handle_pumping_single_002_52698.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 23,
  price: 1
},
{
  name: 'Footsteps Processed 01',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/zapsplat_foley_footsteps_on_wooden_floor_barefoor_16329.wav',
  category: 'Foley',
  subCategory: 'Film & Game',
  user_id: 20,
  price: 1
},
{
  name: 'Footsteps Processed 02',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/zapsplat_foley_footsteps_barefoot_walking_plastic_sheet_47781.wav',
  category: 'Foley',
  subCategory: 'Film & Game',
  user_id: 20,
  price: 1
},
{
  name: 'Raw Footstep 01',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/zapsplat_foley_footstep_single_boys_sneaker_on_concrete_003_50913.wav',
  category: 'Foley',
  subCategory: 'Film & Game',
  user_id: 20,
  price: 1
},
{
  name: 'Raw Footstep 02',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/zapsplat_foley_footstep_single_boys_sneaker_on_concrete_002_50912.wav',
  category: 'Foley',
  subCategory: 'Film & Game',
  user_id: 20,
  price: 1
},
{
  name: 'Footsteps Processed 03',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/zapsplat_foley_feet_barefoot_scuffs_movements_carpet_on_wood_floor_20010.wav',
  category: 'Foley',
  subCategory: 'Film & Game',
  user_id: 20,
  price: 1
},
{
  name: 'Mechanical Lever Down 01',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/smartsound_OBJECT_MECHANICAL_Lever_Wood_Medium_Down_02.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 23,
  price: 1
},
{
  name: 'Mechanical Lever Up 01',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/smartsound_OBJECT_MECHANICAL_Lever_Wood_Small_Up_01.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 23,
  price: 1
},
{
  name: 'CyberTech Activation 01',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cybertech_activation_10.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 23,
  price: 1
},
{
  name: 'CyberTech Activation 02',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cybertech_activation_9.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 23,
  price: 1
},
{
  name: 'CyberTech Activation 03',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cybertech_activation_8.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 23,
  price: 1
},
{
  name: 'CyberTech Activation 04',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cybertech_activation_7.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 23,
  price: 1
},
{
  name: 'CyberTech Activation 05',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cybertech_activation_4.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 23,
  price: 1
},
{
  name: 'CyberTech Activation 06',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cybertech_activation_3.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 23,
  price: 1
},
{
  name: 'CyberTech Activation 07',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cybertech_activation_2.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 23,
  price: 1
},
{
  name: 'CyberTech Activation 08',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cybertech_activation_1.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 23,
  price: 1
},
{
  name: 'Robotix 01',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cyber_tech_14.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 21,
  price: 2
},
{
  name: 'Robotix 02',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cyber_tech_13.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 21,
  price: 2
},
{
  name: 'Robotix 03',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cyber_tech_12.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 21,
  price: 2
},
{
  name: 'Robotix 04',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cyber_tech_11.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 21,
  price: 2
},
{
  name: 'Robotix 05',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cyber_tech_10.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 21,
  price: 2
},
{
  name: 'Robotix 06',
  location: 'https://audatixaudio.s3.us-east-2.amazonaws.com/wavs/pm_fssf2_cyber_tech_1.wav',
  category: 'Machine',
  subCategory: 'Film & Game',
  user_id: 21,
  price: 2
}
      ]);
    });
};
