const express = require('express')
const app = express()
const db = require('./db/connection')

const PORT = 3000

app.listen(PORT, function(){
    console.log(`Express running on PORT ${PORT}`)
})


//db connection
db
    .authenticate()
    .then(() => {
        console.log("DB connected.")
    })
    .catch(err => {
        console.log('DB connection error', err)
    })

//routes
app.get('/', (req, res) =>{
    res.send("Working")
})

