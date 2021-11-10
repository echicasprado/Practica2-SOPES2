const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MensajeSchema = new Schema({
    carne:{type: String},
    nombre:{type: String},
    curso:{ type: String},
    cuerpo:{type: String},
    fecha:{type: String},
    procesado: {type:String},
});


const Mensaje = mongoose.model('Mensaje', MensajeSchema);

module.exports = Mensaje; 


