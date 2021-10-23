import type { I18nMain } from './i18n'
import PT from './pt'
import EN from './en'

enum LocaleEnum {
  PT = 'pt',
  EN = 'en',
}

const DEFAULT_LOCALE = LocaleEnum.PT

const I18N: { [key in LocaleEnum]: I18nMain } = {
  [LocaleEnum.PT]: PT,
  [LocaleEnum.EN]: EN,
}

const getI18N = (locale: LocaleEnum = DEFAULT_LOCALE): I18nMain => {
  return I18N[locale]
}

export { LocaleEnum, getI18N, DEFAULT_LOCALE }
