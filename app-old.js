const http = require('http');



http.createServer( ( req, res ) => {

   /*  
            TODO ESTO SE PUEDE HACER CON EXPRESS
   // Mandar un csv como respuesta

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv' );
    res.writeHead(200, { 'Content-Type': 'application/csv' } );

    res.write( 'id,nombre\n');
    res.write('1,Emanuel\n')

    
    // Mandar un JSon como respuesta
    /* res.writeHead(200, { 'Content-Type': 'application/json' } );

    const persona = {
        id: 1,
        nombre: 'Emanuel'
    } 


    res.write( JSON.stringify( persona ) );*/ 

    res.write( 'Hola mundo' );
    res.end();

})
.listen( 8080 );

console.log( 'Escuchando el puerto', 8080)