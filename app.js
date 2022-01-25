const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello CST-391, It is Matt Sievers!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/hello', function (_req, res) {
    res.render('index', { title: 'Hello World', message: 'Hello world!' })
})


