import { createI18n } from 'vue-i18n'
const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency', currency: 'USD', notation: 'standard'
    },
    decimal: {
      style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
    },
    percent: {
      style: 'percent', useGrouping: false
    }
  },
  'ja-JP': {
    currency: {
      style: 'currency', currency: 'JPY', useGrouping: true, currencyDisplay: 'symbol'
    },
    decimal: {
      style: 'decimal', minimumSignificantDigits: 3, maximumSignificantDigits: 5
    },
    percent: {
      style: 'percent', useGrouping: false
    }
  }
}
export default createI18n({
  locale: localStorage.getItem('lang') || 'ru',
  fallbackLocale: 'en',
  messages: {
    kz: require("./lang/kz.json"),
    en: require("./lang/en.json"),
    ru: require("./lang/ru.json"),
  },
  numberFormats
})