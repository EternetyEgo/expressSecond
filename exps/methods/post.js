const express = require("express")
const app = express()
const path = require("path")

const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Emily"},
    {id: 3, name: "Musk"},
]

app.post('/api/users/add', (req, res) =>{
    // validation 
    if(req.body.name <= 0 ){
        return res.send(400).send("Please fully place")
    }

    // post 
    const user ={
        id: users.length + 1,
        name: req.body.name
    }
    users.push(user)
    res.status(201).send(user)
})

app.get("/api/users/:id", (req, res) =>{
    const user = users.find((us) => us.id === parseInt(req.param.id))
    if(!user)  return res.status(404).send("We haven't this user")
})


// port 
const port = process.env.PORT || 2077

app.listen(port, () => {
    console.log(`Port say ${port}`)
})