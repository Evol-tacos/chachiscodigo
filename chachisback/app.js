const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./connection');

const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(cors());


app.get('/login', async (req, res) => {
    const datos = req.query;
    try{
        const [results, fields] = await connection.query(
            'SELECT * FROM `clientes` WHERE `email` = ? AND `contrasena` = ?'
        );
        console.log(results);
        console.log(fields);
    }
    catch(e){
        console.log(e);
    }
    console.log(datos);
    res.send('Inicio sesion');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});