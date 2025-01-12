import express from 'express';
import bodyParser from 'body-parser'
import Lotes from './src/routers/router.lotes.js'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use(Lotes)

app.listen(3000, ()=>
    {
         console.log("Servidor en el puerto 3000")
    }
)