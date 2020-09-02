const db = require('./models');
const data = require('./seed.json');

db.Translation.deleteMany({}, (err, deletedTranslations) => {
    db.Translation.create(data.translations, (err, seededTranslations) => {
        if (err) console.log(err);
        
        console.log(data.translations.length, 'translations created successfully');
        
        process.exit();
    });
});