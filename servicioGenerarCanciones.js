import {generarToken} from './servicioGenerarToken.js'

//llamar funcion generar token

let tokenRespuesta =await generarToken()
let token =  `${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`


//URI DEL SERVICIO

const URI ="https://api.spotify.com/v1/artists/716NhGYqD1jl2wI1Qkgq36/top-tracks?market=US"


const PETICION ={

    method:"GET",
    headers: {Authorization:token}
    
    }

    //CONSUMO EL SERVICIO 
    export async function obtenerCanciones(){
        let respuesta = await fetch(URI,PETICION)
        return (respuesta.json())
    }