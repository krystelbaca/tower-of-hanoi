const express = require('express')

const path = require('path');

const app = express()

const cors = require('cors');

const router = require('./Router.js')

require('dotenv').config();
dotenv.config()
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT || 4040;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use('/', router)

app.use(express.static(path.join(__dirname, '..', 'hanoi-tower-client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'hanoi-tower-client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})