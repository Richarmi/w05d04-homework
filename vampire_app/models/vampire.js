const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
//write your schema fields here
name: String //'Count Chocula',
hair_color: String //'brown',
eye_color: String //'brown',
dob: date: { type: Date, default: Date.now } //new Date(1971, 2, 13, 7, 47),
loves: String, //['cereal','marshmallows'],
location: String, //'Minneapolis, Minnesota, US',
gender: , {type: String} // 'm'
victims: Number // 2

});

const Vampire = mongoose.model('Vampire', vampireSchema);
