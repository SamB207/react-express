const express = require("express")
//import path module
const path = require('path')
const PORT = 8000
const app = express();

//host react app as static files
app.use(express.static (path.resolve(__dirname, '../client/build')))

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../client/build', 'indext.html'))
})

app.get('/api', (req, res)=>{
    //do somethng when the client requests this route - /api, send message back to client
    res.json({message: "Yo yo!"})
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`)
})
 