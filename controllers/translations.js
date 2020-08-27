const db = require('../models');

const index = (req, res) => {
    db.Translate.find({}, (err, foundTranslation) => {
        if (err) console.log('Error in translate#index:', err);

        res.send("Incomplete translate#index controller function");
    });
};

const show = (req, res) => {
    db.Translate.findById(req.params.id, (err, foundTranslation) => {
        if (err) console.log('Error in translate#show:', err);

        res.send("Incomplete translate#show controller function");
    });
};

const create = (req, res) => {
    db.Translate.create(req.body, (err, savedTranslation) => {
        if (err) console.log('Error in translate#create:', err);

        res.send("Incomplete translate#create controller function");
    });
};

module.exports = {
    index,
    show,
    create,
};