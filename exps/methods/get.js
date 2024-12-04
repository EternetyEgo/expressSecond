const express = require("express")
const app = express()
const path = require("path")

const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Emily"},
    {id: 3, name: "Musk"},
]

app.get('/api/users', (req, res) =>{
    res.json({
        status: true,
        massage: `We have users: ${users.length} and their names ${users.name}`
    })
})


// port 
const port = process.env.PORT || 2077

app.listen(port, () =>{
    console.log(`port say ${port}`)    
})