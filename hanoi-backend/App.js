const express = require('express')

const path = require('path');

const app = express()

const cors = require('cors');

const router = require('./Router.js')

const port = 4040

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use('/', router)

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '..', 'hanoi-tower-client', 'build')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'hanoi-tower-client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})