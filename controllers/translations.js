const db = require('../models');
const pigionTranslation = require('./pigion')


const index = (req, res) => {
    db.Translation.find({}, (err, foundTranslations) => {
        if (err) console.log('Error in translate#index:', err);

        res.json(foundTranslations);
    });
};

const show = (req, res) => {
    db.Translation.findById(req.params.id, (err, foundTranslation) => {
        if (err) console.log('Error in translate#show:', err);

        res.json(foundTranslation);
    });
};

const create = (req, res) => {
    console.log('create body',req.body)
    const dummy = pigionTranslation(req.body.oringalInput)
    dummy.then(transData => {
        console.log(transData, 'res')
        res.json(transData)
    })

    // res.json(dummy)
    
    // db.Translation.create(req.body, (err, savedTranslation) => {
    //     if (err) console.log('Error in translate#create:', err);

    //     res.json(savedTranslation);
    // });
};

module.exports = {
    index,
    show,
    create,
};