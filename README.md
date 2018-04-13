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
import { countries, categories, languages } from 'newsapi-label-dict'

var au = countries('au')
var entertainment = categories('entertainment')
var es = languages('es')

console.log(au)
>> Australia

console.log(entertainment)
>> Entertainment

console.log(es)
>> Spanish
```

# License

MIT

# Translations

Currnent language is English, I might add translations in the future. Any pull requests for this feature will be accepted.

# Contributing

Any pull requests welcome
