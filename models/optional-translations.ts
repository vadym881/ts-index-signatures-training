import { LanguageCode } from "./translations";

type OptionalTranslations = {
  [K in LanguageCode]?: string;
} & {
  default?: string;
};

export class OptTranslations {
  private translations: OptionalTranslations = {};

  constructor(defaultTranslation?: string) {
    if (defaultTranslation) {
      this.translations.default = defaultTranslation;
    }
  }

  assignValue(code: LanguageCode, translation: string) {
    this.translations[code] = translation;
  }

  getTranslation(code: LanguageCode): string {
    if (this.translations[code]) {
      return this.translations[code]!;
    } else if (this.translations.default) {
      return this.translations.default;
    } else {
      throw new Error(
        `Translation for ${code} not found and no default provided`
      );
    }
  }
}
