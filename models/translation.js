const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TranslationSchema = new Schema({

    user_id: { type: String, },

    oringalInput: { type: String, required: true, },

    translations:  { type: Array, required: true, },

    engReTranslations:  { type: Array, required: true, },

});


const Translation = mongoose.model('Translation', TranslationSchema);

module.exports = Translation;