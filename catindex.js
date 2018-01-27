const express = require("express")
const axios = require("axios")

const baseURL = "http://thecatapi.com"
const api = axios.create({ baseURL })

const app = express()

const params = { format: 'html' }

app.get('/gatos', (req, res) =>
    api.get('/api/images/get', { params })
        .then(ret => res.send(ret.data))
        .catch(e => console.log(e)))

app.listen(5000, _ => console.log('Cat memes online'))