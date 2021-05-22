const express = require('express')
const app = express()
const PORT = process.env.PORT || 9859

app.get('/', (req, res) => {
  res.send('asdfasdf')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})