const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlData = new Schema(
  {
    originUrl:{
      type: String,
      require: true,
    },
    shortenUrl:{
      type: String,
      require: true,
    },
  }
)

module.exports = mongoose.model('shortenUrl', urlData)