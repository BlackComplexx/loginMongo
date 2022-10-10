"use strict";

/**
    @MongoDB Dowload: https://www.mongodb.com/try/download/community-kubernetes-operator2
    @GitHub => https://github.com/asdko9K/loginMongo
    @WebServer @HTTP
*/

const express = require('express');
const app = express()

let settings = {
    port: 3000,
}

app.get('/', function (req, res) {
    res.send('use path /auth and put arguments "user", "pass" to check if the user exists!')
})

app.get('/auth', async function(req, res){
    let { user, pass } = req.query;
    let isReal = await require("./db/catalogs").checkUser(user, pass)

    if (isReal == true)
        res.send(`Welcome ${user}!`)
    else
        res.send(`User "${user}" no is real!`)
})

app.get('/register', async function(req, res){
    let { user, pass } = req.query

    let MakeUser = await require("./db/catalogs").createUser(user, pass)

    if (MakeUser == true)
        res.send(`User "${user}" is maked!`)
    else
        res.send(`Fail to make user "${user}"!`)
})
  
app.listen(settings.port)