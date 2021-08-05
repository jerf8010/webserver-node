const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;



// Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' )

// Servir contenido estadico
app.use( express.static('public') );

app.get('/', ( req, res ) => {
    res.render('home', {
        nombre: 'Emanuel Fitta',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', ( req, res ) => {
    res.render('generic', {
        nombre: 'Emanuel Fitta',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', ( req, res ) => {
    res.render('elements', {
        nombre: 'Emanuel Fitta',
        titulo: 'Curso de Node'
    });
})


/*
app.get('/generic', ( req, res ) => {
    res.sendFile( __dirname + '/public/generic.html')
})



app.get('/elements', ( req, res ) => {
    res.sendFile( __dirname + '/public/elements.html')
}) */


/* app.get('/',function ( req, res ) {
    res.send('Home Page')
}) */


/* app.get('/hola-mundo', function (req , res ) {
    res.send('Hola mundo en su ruta')
})
 */
app.get('*', function (req , res ) {
    res.sendFile(__dirname + '/public/404.html')
})
//app.listen(8080)

app.listen( port, () => {
    console.log( `Example app listening at http://localhost:${port}`)
})