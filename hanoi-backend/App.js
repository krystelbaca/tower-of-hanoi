const express = require('express')

const app = express()

const router = require('./Router.js')

const port = 4040

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})