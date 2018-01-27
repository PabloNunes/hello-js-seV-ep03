const express = require("express")
const axios = require("axios")

const baseURL = "https://api.github.com/users/"

const app = express()

const api = axios.create({ baseURL })

app.get("/seguidores", (req, res) => {
    api.get("/users/PabloNunes/followers")
        .then(ret => res.send(ret.data.length))
        .catch(err => res.status(500).send(err.response.data))
})

app.get("/busca", (req, res) => {
    api.get("/search/users", {
        params: {
            q: req.query.user
        }
    })
})


app.listen(3000, () => {
    console.log("On!")
})