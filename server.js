if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express();
const express_ejs_layout = require('express-ejs-layouts') 
const router1= require('./routes/index')

app.set('view engine','ejs')
app.set('views',__dirname +'/views')
app.set('layout','./layouts/layout')
app.use(express_ejs_layout)
app.use(express.static('public'))
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology: true })

const db = mongoose.connection
    db.on('error', error => console.error("error",error)
    )

db.once('open', ()=> console.log('connectedToMangoose'))


app.use('/',router1)git 
 app.listen(process.env.PORT || 2000 , ()=>{
     console.log('working')
 })


