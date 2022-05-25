import {obtenerCanciones} from './servicioGenerarCanciones.js'
import {pintarCanciones} from './pintarCanciones.js'

//llamar funcion generar token

let canciones =await obtenerCanciones()


//llamar funcion pintar canciones

pintarCanciones(canciones.tracks)     
