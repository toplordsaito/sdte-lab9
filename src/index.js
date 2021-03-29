const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('lab9 Done!'))

app.listen(port, "0.0.0.0", () => console.log(`Web app listening on port ${port}!`))