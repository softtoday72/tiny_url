const express = require('express')
const router = express.Router()
const shortenModel = require('../models/tinymodel')
const shortenGenerater = require('../tinyurl')
let newUrl = ''

//首頁
router.get('/', (req,res) => {
  res.render('index')
    
})

router.get('/:shorten', (req,res) => {
  const shorten = req.params.shorten
  shortenModel.findOne({ shortenUrl: shorten })
    .lean()
    .then((url) => {
      if(url) {
        res.redirect(url.originUrl)
      }
    })
    .catch((error) => {
      console.log(error)
      res.render('error',{error: error.message})
    })
})


router.post('/', (req,res) => {
  const originUrl = req.body.originUrl
  shortenModel.find()
    .lean()
    .then((urls) => {
      newUrl = urls.find(element => element.originUrl === originUrl)
      if (newUrl) {
        newUrl = "http://localhost:3000/" + newUrl.shortenUrl
        return res.render('show', { newUrl, originUrl })
      }
      let shorten = shortenGenerater()
      while(urls.some((url) => url.shortenUrl === shorten)) {
        shorten = shortenGenerater()
      }
      newUrl = "http://localhost:3000/" + shorten
      return shortenModel.create({
        originUrl: originUrl,
        shortenUrl: shorten,
      })
        .then(() => {
          res.render('show', { newUrl, originUrl })
        })
    })
    .catch((error) => {
      console.log(error)
      res.render('error', { error: error.message })
    })
})
module.exports = router

