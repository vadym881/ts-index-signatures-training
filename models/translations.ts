export type LanguageCode = 'en' | 'ua' | 'it' | 'de' | 'sk';

export class Translations {
  sentence: string;
  private translations: { [K in LanguageCode]?: string } = {};

  constructor(sentence: string) {
    this.sentence = sentence;
  }

  assignValue(code: LanguageCode, translation: string) {
    this.translations[code] = translation;
  }

  getTranslation(code: LanguageCode): string {
    if (!this.translations[code]) {
      throw new Error(`Translation for ${code} not found`);
    }
    return this.translations[code];
  }
}