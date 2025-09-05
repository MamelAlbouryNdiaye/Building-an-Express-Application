import express from 'express';
import morgan from 'morgan';


const app =  express()

//Middleware to parse form data  
app.use(express.urlencoded({extended: true}));
//middleware morgan
app.use(morgan('dev')); 

//register view engine
app.set('view engine', 'ejs');


//routes
app.get('/', (req, res) =>{
    res.render('index', {title : 'HomePage'})
})

app.get('/about', (req, res) =>{
    res.render('about', {title : "AbouPage"})
})

//post route
app.post('/submit_form', (req, res) =>{
    console.log(req.body) // log data to console
    res.send("SUCCESS!")
})

//port
app.listen(4000, () =>{
    console.log('server is running ')
})