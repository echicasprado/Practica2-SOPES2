const express = require('express');
const Mensaje = require('../models/Mensaje');
const router = express.Router();

router.get('/', (req,res)=>{
    var hola = {nombre: "redes"}
    hola.codigo = "217"
    console.log(hola)
    res.send('Server Levantado 3'); 
});

router.post('/crear' , async (req, res) => {

    try {

        const data = req.body;
        console.log(data);
        await Mensaje.create({
            carne: data.carne.toString(),
            nombre: data.nombre.toString(),
            curso: data.curso.toString(),
            cuerpo: data.cuerpo.toString(),
            fecha: data.fecha.toString(),
            procesado: " ",
        }); 
        res.status(202);
        res.json({ response : 'Reporte Creado' });  

        
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send({ message : error });
    }
});

router.get('/obtenerMensajes', async (req, res) => {

    try {
        var m = await Mensaje.find();
        for(var i=0; i < m.length; i++){
            m[i].procesado = '201612144';
            //console.log("procesado")
            //console.log(m[i])
        }
        console.log(m);
        res.send(m);
        
    } catch (error) {
        console.log(error)
        res.status(500);
        res.send({ message : error });
    }
});

router.post('/obtenerUno', async (req, res) => {

    try {

        const data = req.body;
        const carne = data.carne;
        var m = await Mensaje.find({ carne: carne})
        for(var i=0; i < m.length; i++){
            m[0].procesado = '201612144'
        }
        console.log(m)
        res.send(m)

        
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send({ message : error });
    }
});


module.exports = router;

