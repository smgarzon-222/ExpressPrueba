/*Crear la carpeta modelos y dentro el archivo Prueba.js, donde se creará un
esquema para los documentos de la colección prueba. Y exportar.*/
const mongoose = require('mongoose');
/* Se definen los elementos que va a tener el Schema. */
let PruebaSchema = new mongoose.Schema({
idPrueba: Number,
nombrePrueba: String,
detallePrueba: String

});
/* Se debe de exportar con la instancia que se creo*/
module.exports = mongoose.model('Prueba', PruebaSchema);