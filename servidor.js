/* Se importa expres */
const express = require('express');
/* En la siguiente variable se almacena una instancia de express */
const app = express();
/* Se debe de importar mongoose.*/
const mongoose = require('mongoose');
/* Se importa el modelo.*/
const PruebaSchema = require('./modelos/Prueba.js');
/*Se deben implementar rutas. Para ello se importa Router, que proporciona una Routing API.*/
const router = express.Router();
/*Para identificar correctamente los datos de las peticiones POST y PUT,
es necesario usar los métodos urlencoded() y json() de express.*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*Para usar rutas, se insertan en la app*/
app.use(router);

/*Conectarse a MongoDB agregando la cadena de conexion de la base de datos.*/
mongoose.connect('mongodb+srv://hramirezcu:Yukarinear14@modelodesostenibilidada.5swuqsf.mongodb.net/PruebaConexion?retryWrites=true&w=majority');


/* Se procede a activar el servidor y enviar el puerto por el cual se escuchara */
app.listen(4000, () => {
    console.log('Escuchando por puerto 4000');
});

/*Se define la ruta raíz del proyecto, con su request y su response.*/
router.get('/', (req, res) => {
    res.send('Inicio de la API');
});

/*Crear la ruta para insertar Prueba.*/
router.post('/prueba', (req, res) => {
    let nuevaPrueba = new PruebaSchema({
        idPrueba: req.body.id,
        nombrePrueba: req.body.nombre,
        detallePrueba: req.body.detalle
    });

    nuevaPrueba.save(function (err, datos) {
        if (err) {
            console.log(err);
        }
        else {
            res.send('Prueba almacenada correctamente');
        }
    });
});

/*Crear la ruta para ver las tareas.*/
router.get('/Prueba', (req, res) => {

    PruebaSchema.find(function (err, datos) {

        if (err) {

            console.log("Error leyendo las Prueba");

        }
        else {

            res.send(datos);

        }
    });

});
