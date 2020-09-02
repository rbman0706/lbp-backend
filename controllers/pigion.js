const {Translate} = require('@google-cloud/translate').v2;
const langData = require('../languages.json');


const english = 'en';

//Add your project ID below

// const projectId = ""

const translate = new Translate({projectId});

function pigionTranslation(inputText){
    return randomiseLangs(inputText)
};


//randomise langauges

function randomiseLangs(inputText){
    const array = []
    for (let i = 0; i <11; i++){
        array.push(langData[Math.floor(Math.random() * langData.length)])

    }
    console.log(array)
    return pigionQuest(array, inputText)
};


//Does Translations


async function pigionQuest(langArray, inputText) {
    console.log(inputText)

    let output = {

        oringalInput: inputText,

        translations: [],
    };

    let translateText = inputText


    for (const lang of langArray){
        let target = lang.code;
        const [translation] = await translate.translate(translateText, target);

        console.log(lang.language);
        console.log(translation);


        translateText = translation

        const [enTranslation] = await translate.translate(translateText, english);

        console.log(enTranslation);

        output.translations.push({ langName: lang.language, translation: translation, engReTranslations: enTranslation})
   
    };

    console.log(output)

    return output

};



module.exports = pigionTranslation;

