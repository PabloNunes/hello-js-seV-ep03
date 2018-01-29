const express = require("express")
const axios = require("axios")

const baseURL = "https://api.github.com"

const app = express()

const api = axios.create({ baseURL })

app.get("/seguidores", (req, res) => {
    api.get("/users/PabloNunes/followers")
        .then(ret => res.send(ret.data))
        .catch(err => res.status(500).send(err.response.data))
})

app.listen(3000, () => {
    console.log("On!")
})