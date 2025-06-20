import { AppTranslations } from "./models/app-translations";
import { LanguageCode, Translations } from "./models/translations";
import { OptTranslations } from "./models/optional-translations";

// Translations
const helloTranslations = new Translations('Hello, world!');
helloTranslations.assignValue('en', 'Hello, world!');
helloTranslations.assignValue('ua', 'Привіт, світ!');
helloTranslations.assignValue('it', 'Ciao, mondo!');
helloTranslations.assignValue('de', 'Hallo, Welt!');
helloTranslations.assignValue('sk', 'Ahoj, svet!');

console.log(helloTranslations.getTranslation('en'));
console.log(helloTranslations.getTranslation('ua'));
console.log(helloTranslations.getTranslation('it'));
console.log(helloTranslations.getTranslation('de'));
console.log(helloTranslations.getTranslation('sk'));

// App Translations
const appTranslations = new AppTranslations();

const hello = new Translations('Hello!');
hello.assignValue('en', 'Hello!');
hello.assignValue('ua', 'Привіт!');

const bye = new Translations('Goodbye!');
bye.assignValue('en', 'Goodbye!');
bye.assignValue('ua', 'До побачення!');

// Dynamic access
const key: LanguageCode = 'hello' as LanguageCode;
if (appTranslations.hasTranslation(key)) {
  const translationStr = appTranslations.getTranslation(key);
  console.log(translationStr);
}

// Access to non-existent key
const missingKey: LanguageCode = 'welcome' as LanguageCode;
if (appTranslations.hasTranslation(missingKey)) {
  appTranslations.getTranslation(missingKey);
} else {
    console.log(`No translation for key "${missingKey}"`);
}

// Optional translations
const opt = new OptTranslations('Default text');
opt.assignValue('en', 'Hello!');
console.log(opt.getTranslation('en'));
console.log(opt.getTranslation('ua'));