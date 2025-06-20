import { LanguageCode, Translations } from "./translations";

export class AppTranslations {
  private translations: { [key: string]: Translations } = {};

  constructor() {}

  assignValue(key: LanguageCode, translation: Translations) {
    this.translations[key] = translation;
  }

  getTranslation(key: LanguageCode): string {
    if (!this.translations[key]) {
      throw new Error(`Translation for key "${key}" not found`);
    }
    return String(this.translations[key]);
  }

  getAllTranslations(): { [key: string]: string } {
    const result: { [key: string]: string } = {};
    for (const key in this.translations) {
      result[key] = String(this.translations[key]);
    }
    return result;
  }
  hasTranslation(key: LanguageCode): boolean {
    return key in this.translations;
  }

  removeTranslation(key: LanguageCode) {
    if (this.hasTranslation(key)) {
      delete this.translations[key];
    } else {
      throw new Error(`Translation for key "${key}" does not exist`);
    }
  }

  clearTranslations() {
    this.translations = {};
  }

  updateTranslation(key: LanguageCode, translation: Translations) {
    if (this.hasTranslation(key)) {
      this.translations[key] = translation;
    } else {
      throw new Error(`Translation for key "${key}" does not exist`);
    }
  }
}
