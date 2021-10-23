import { writable } from 'svelte/store'
import { getI18N, LocaleEnum } from '../i18n'

function createI18n() {
  const { subscribe, set } = writable(getI18N())

  return {
    subscribe,
    changeLocale: (locale: LocaleEnum) => set(getI18N(locale)),
  }
}

export const i18n = createI18n()
