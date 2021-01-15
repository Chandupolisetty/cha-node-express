
const express = require('express')

const app = express()

const port = process.env.PORT || 3000
app.listen(port)
console.log(`App is running on ${port}`)


app.get("/",(req,res)=>{
    res.send("Hello World, This is Chandu!")
})

app.get('/about',(req,res)=>{
    res.send("This is a node express application.")
})

app.get('/contact',(req,res)=>{
    res.send("Feel free to contact me on S538110@nwmissouri.edu")
})

app.get('/help',(req,res)=>{
    res.send("You have requested the help page! ")
})

app.get('/help/:page', (req, res) => {
    res.send(`How can i help you Mr./Mrs. ${req.params.page}`)
  }) 