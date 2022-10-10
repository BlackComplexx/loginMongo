"use strict";

require('./db');
let CatalogUser = require("./users")

async function checkUser(user){
try {

let finish = false
let userInfo

const result = await CatalogUser.find({username: user})
var convert1 = JSON.stringify(result);
var ParseJson = JSON.parse(convert1);
    
    ParseJson.forEach(async(obj) => {
        if (finish == false){ 
            finish = true
            userInfo = true
        } else {
            return
        }
    });

    return (userInfo) ? userInfo : false

    } catch (error){
        console.warn("[!] An error has occurred, More information:\n %s", error)
    }
}

async function createUser(user, pass){
let ConcurrentUser = await checkUser(user)
let maked

if (ConcurrentUser == false) {
    let DataSaved = new CatalogUser({
        username: user,
        password: pass,
        suspend: false
    });
            
    await DataSaved.save();
    maked = true
} else {
    maked = false
}

return maked
}

module.exports = {
    checkUser: checkUser,
    createUser: createUser
}