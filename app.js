// import library

const express = require('express')
const { restart } = require('nodemon')
const app = express()

const movieRoute = require('./routes/movies')

app.use('/movies',movieRoute)

app.get('/', (req,res)=> {
    res.send('You are in your home page')
})

app.listen(3000, ()=>{
    console.log('Server is up and running...')
})