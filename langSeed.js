const fs = require("fs");
// const projectId = 'Your API key here';
const location = 'global';

// Imports the Google Cloud Translation library
const {TranslationServiceClient} = require('@google-cloud/translate');

// Instantiates a client
const translationClient = new TranslationServiceClient();

let langArry = []

async function getSupportedLanguages() {
  // Construct request
  const request = {
    parent: `projects/${projectId}/locations/${location}`,
    displayLanguageCode: 'en',
  };

  try {
    // Get supported languages
    const [response] = await translationClient.getSupportedLanguages(request);

    for (const language of response.languages) {

        langOjb = {language: language.displayName, code: language.languageCode};

        langArry.push(langOjb);
 
    }
    console.log(langArry);
  } catch (error) {
    console.error(error.details);
  }

  fs.writeFile("languages.json", JSON.stringify(langArry), err => { 
     
    // Checking for errors 
    if (err) throw err;  
   
    console.log("Done writing"); // Success 
}); 
}

getSupportedLanguages();

