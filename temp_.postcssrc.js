const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss('./tailwind.js'),
    purgecss({
    //   content: ['./src/**/*.vue'],
    //   css: ['./src/css/tailwind.css'],
      content: ['a'],
      css: ['b'],
      extractors: [
        {
            extractor: class TailwindExtractor {
                static extract(content) {
                    return content.match(/[\w-/:]+(?<!:)/g) || [];
                }
            },
            extensions: ['vue']
        }
      ]
    }),
    autoprefixer
  ]
}