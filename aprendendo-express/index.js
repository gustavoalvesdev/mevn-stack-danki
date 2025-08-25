const express = require('express')
const app  = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Opa, como vai?')
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})