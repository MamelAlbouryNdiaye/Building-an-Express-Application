import express from 'express';
import ejs from 'ejs'

const app =  express()


//register view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('index', {title : 'HomePage'})
})

//port
app.listen(4000, () =>{
    console.log('server is running ')
})