
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rainbow-overrides.production.min.cjs')
} else {
  module.exports = require('./rainbow-overrides.development.cjs')
}
