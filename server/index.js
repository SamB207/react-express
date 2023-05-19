const express = require("express")
//import path module
const path = require('path')
const db = require('./queries')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
//host react app as static files
app.use(express.static (path.resolve(__dirname, '../client/build')))
const PORT = 8000
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../client/build', 'indext.html'))
})

// app.get('/api', (req, res)=>{
//     //do somethng when the client requests this route - /api, send message back to client
//     res.json({message: "Yo yo!"})
// })
app.post('/test', (req, res)=>{
    res.send(req.body)
})
app.get('/links', db.getLinks)
app.post('/new', db.createLink)

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})
 