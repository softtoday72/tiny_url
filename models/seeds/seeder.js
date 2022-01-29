const db = require('../../config/mongoose.js')
const shortenModel = require('../tinymodel.js')
const data = require('../../data.json').results

db.once('open', () => {
  console.log('mongodb seeder connected!')

  shortenModel.create(data)
    .then(() => {
      console.log('tiny url seeder done!')
      db.close()
    })
    .catch((error) => {
      console.log(error)
      res.render('error', { error: error.message })
    })
})