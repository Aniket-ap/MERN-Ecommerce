const express = require('express')

const app = express()

const port = 8000

app.get('/', (req, res)=>{
  res.send("Hello Home Page")
})

app.get('/login', (req, res)=>{
  res.send("Login")
})

app.get('/signup', (req,res)=>{
  res.send("Signup")
})

app.listen(port, ()=>{
  console.log(`Server is up and running at http://localhost:${port}`)
})