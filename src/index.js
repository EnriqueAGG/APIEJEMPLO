//"dev": "babel-node src/index.js" - ejecutar index
//"dev": "nodemon src/index.js --exec babel-node"

import app from './app';



//escuchar en el puerto: 
app.listen(app.get('port'));

console.log('server on port', app.get('port'));