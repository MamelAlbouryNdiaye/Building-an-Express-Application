import express from 'express';


const app =  express()


//register view engine
app.set('view engine', 'ejs');
//routes
app.get('/', (req, res) =>{
    res.render('index', {title : 'HomePage'})
})

app.get('/about', (req, res) =>{
    res.render('about', {title : "AbouPage"})
})

//port
app.listen(4000, () =>{
    console.log('server is running ')
})