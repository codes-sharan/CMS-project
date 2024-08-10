const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.render('blogs.ejs')
});

app.get('/createBlog', (req, res) => {
    res.render('createBlog.ejs')
});

//create blog post
app.post('/createBlog', (req, res) => {
    console.log(req.body) //body or body.title or body.description etc
    res.send('Form submitted successfully')
});




app.listen(3000, () => {
    console.log('Project started at port 3000')
});




