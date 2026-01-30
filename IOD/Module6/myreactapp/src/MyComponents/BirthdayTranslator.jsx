import { useState } from "react";

const phrases = new Map([
  ['english', 'Happy Birthday'],
  ['german', 'Alles Gute zum Geburtstag'],
  ['spanish', 'Feliz Cumpleaños']
]);

/*

function BirthdayTranslator() {
    const [currentLanguage, setCurrentLanguage] = useState("english");  //HAS TWO VARIABLES.
    const [phrase, setPhrase] = useState(phrases.get("english"))

//since both values always change together and need to stay in sync, it may be more reliable to combine them into a single state value.

const handleChangeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setPhrase(phrases.get(lang));
};

return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {phrase}! ({currentLanguage})
      </h3>
      <button onClick={() => handleChangeLanguage('english')}>English</button>
      <button onClick={() => handleChangeLanguage('german')}>German</button>
      <button onClick={() => handleChangeLanguage('spanish')}>Spanish</button>
    </div>
  );

*/


//MODIFY IT


/*

function BirthdayTranslator() {
  const [currentPhrase, setCurrentPhrase] = useState({
    lang: "english",
    phrase: "Happy Birthday",
  });

  const handleChangeLanguage = (newlang) =>
    setCurrentPhrase({ lang: newlang, phrase: phrases.get(newlang) });

  return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {currentPhrase.phrase} {currentPhrase.lang}!
      </h3>
      <button onClick={() => handleChangeLanguage("english")}>English</button>
      <button onClick={() => handleChangeLanguage("german")}>German</button>
      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
    </div>
  );
}

*/

//MODIFY FURTHER TO AVOID REDUNDANCY

function BirthdayTranslator() {
  const [currentLanguage, setLanguage] = useState("english");

  const handleChangeLanguage = (newLang) => {
    setLanguage(newLang);
  }

return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {phrases.get(currentLanguage)} {currentLanguage}!
      </h3>
      <button onClick={() => handleChangeLanguage("english")}>English</button>
      <button onClick={() => handleChangeLanguage("german")}>German</button>
      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
    </div>
  );
}


export default BirthdayTranslator;

