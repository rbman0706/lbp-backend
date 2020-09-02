const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TranslationSchema = new Schema({

    user_id: { type: String, default: 'Annon'},

    oringalInput: { type: String, required: true, },

    translations: { type: Array, required: true, },

});


const Translation = mongoose.model('Translation', TranslationSchema);

module.exports = Translation;


//req user modele in user_id