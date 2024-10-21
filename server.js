//importing the modules
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

//using handlebars view engine with no default layouts
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
//defining views directory location
app.set('views', path.join(__dirname, 'views'));

// Main route to render index.hbs without a layout
// Defining a route for the root URL
app.get('/', (req, res) => {
    //storing current gmt thanks to new Date & toISOString
    const currentTime = new Date().toISOString(); 
    //index rendering with info below
    res.render('index', {
        //name, course and current time 
        name: 'Mathieu Fischer', 
        course: 'WEB322', 
        time: currentTime,
        //disabling layout 
        layout: false
    });
});

//starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
