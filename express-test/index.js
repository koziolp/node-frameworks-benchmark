const express = require('express')
const {createRandomData} = require('../data/data');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).json(createRandomData('express'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
