import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express()

const port = process.env.PORT
// Dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// serve static content
app.use(express.static('public', { extensions: ['html'] }))

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Jhoel Soncco',
        title: 'Curso Node',
    })
})

app.get('*', (req, res) => {
    res.render(__dirname + '/public/index.html')
})
console.log('ejecutando en el puerto ', port)
app.listen(port)
