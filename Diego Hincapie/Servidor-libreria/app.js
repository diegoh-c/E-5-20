import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path'; 



const app = express();


// Conexión base de datos 
const mongoose = require('mongoose'); 
const uri = 'mongodb://localhost:27017/libreria'; 
const options = {useNewUrlParser: true, useUnifiedTopology: true}; 

mongoose.connect(uri, options).then(
    () => { console.log('conectado a base de datos') },
    err => { err }
  );

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}))



//RUTA
/*app.get('/', function (req, res) {

    res.send('hola mundo');

});*/

app.use('/api', require('./routes/libro'));
const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));
//PUERTO

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('example app listening on port' + app.get('puerto'));
});