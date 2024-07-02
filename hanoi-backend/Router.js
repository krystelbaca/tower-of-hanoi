const express = require('express')

const router = express.Router()

const { play } = require('./src/controllers/playController')

router.get('/', )

router.post('/play', play)

module.exports = router