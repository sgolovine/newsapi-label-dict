const countries = require("./countries")
const categories = require("./categories")
const languages = require("./languages")

function getCountry(countryCode) {
  return countries[countryCode]
}
function getCategory(categoryCode) {
  return categories[categoryCode]
}
function getLanguage(languageCode) {
  return language[languageCode]
}

module.exports = {
  countries,
  categories,
  languages,
  getCountry,
  getCategory,
  getLanguage,
}
