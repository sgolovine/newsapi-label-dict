const countries = require("./countries")
const categories = require("./categories")
const languages = require("./languages")

const keys = require("./keys")

function getCountry(countryCode) {
  return countries[countryCode]
}
function getCategory(categoryCode) {
  return categories[categoryCode]
}
function getLanguage(languageCode) {
  return language[languageCode]
}

function getObject(type) {
  switch (type) {
    case "language":
      return languages
    case "country":
      return countries
    case "category":
      return categories
    default:
      return null
  }
}

module.exports = {
  countries,
  categories,
  languages,
  getCountry,
  getCategory,
  getLanguage,
  getObject,
  countryKeys: keys.countryKeys,
  categoryKeys: keys.categoryKeys,
  languageKeys: keys.languageKeys,
}
