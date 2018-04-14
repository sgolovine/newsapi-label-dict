# NewsAPI Label Dictionary

<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">

A tiny library that translates NewsAPI (ISO 3166-1) country and category labels into readable strings

# Installation

`npm install --save newsapi-label-dict`

OR

`yarn add newsapi-label-dict`

# Usage

Usage is very straightforward

```
import * as dict from 'newsapi-label-dict'

dict.countries.ru
>> Russia

dict.categories.sports
>> Sports

dict.languages.es
>> Spanish

dict.getCountry('ru')
>> Russia

dict.getCategory('sports')
>> Sports

dict.getLanguage('es')
>> Spanish

dict.getObject('language') // language, country, category
>> {
  fr: "French",
  en: "English",
  ...
}
```

# License

MIT

# Translations

Currnent language is English, I might add translations in the future. Any pull requests for this feature will be accepted.

# Contributing

Any pull requests welcome
