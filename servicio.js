//Pasos para consumir un api con JS PURO
//DECLARO LA URI(pa donde voy)
const URI ="https://api.spotify.com/v1/artists/716NhGYqD1jl2wI1Qkgq36/top-tracks?market=US" 

//2. DECLARO LOS PARAMETROS DE LA PETICION (QUE VOY A HACER)

const TOKEN = "Bearer BQDIS9iCighY-GkF_K7HHNDe8rUVVKWPTuxyL4DG4MP3TMQ9oEPwWBqLhON8ho7AaAY6bVKDgKT8IPH4D3JsG1E2vDMobYUdSXYgLrPnWJBh6nqGZCku3kWtb1qfF8l16nb60UMNJ-6QxS5DQykDUPsb11CDtQpyizY"

const PETICION ={

method:"GET",
headers: {Authorization:TOKEN}

}


//Rutina para consumir api con metodo post
// 1. Uri para donde voy

const URIPOST = 'https://accounts.spotify.com/api/token'

//2. almaceno los datos que voy a enviarr

let dato1  ='client_id=4e183525652b4b60891a0c3c79f073f3'

let dato2 ='client_secret=1f80fd4d69ca4441ad0cb3c04a8efa3e'

let dato3 = 'grant_type=client_credentials'


//3. Configuro la peticion

const PETICIONPOST={

method: "POST",
headers:{

"Content-type":"application/x-www-form-urlencoded"

},
body:dato1+'&'+dato2+'&'+dato3

}



//4. VOY AL SERVIDOR A CONSUMIR EL SERVICIO
 fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token = respuesta.token_type+' '+respuesta.access_token
    console.log(token)
})
.catch(function(respuesta){
console.log(respuesta)

})























/*DECLARO EL FETCH(VOY AL SERVIDOR)
fetch(URI,PETICION)
.then(function(respuesta){

return (respuesta.json())

})
.then(function(respuesta){

    console.log(respuesta)//respuesta es un objeto
    console.log(respuesta.tracks)//arreglo de 10 canciones
pintarCanciones(respuesta.tracks)
    
})
.catch(function(respuesta){
    console.log(respuesta)
})
 
///FUNCION PARA RECORRER UN ARREGLO

function pintarCanciones(canciones){

let fila = document.getElementById("fila")






canciones.forEach(function(cancion){
console.log(cancion)
console.log(cancion.name)
console.log(cancion.preview_url)
console.log(cancion.album.images[0].url)



//RUTINA PARA LLENADO
 let columna = document.createElement("div")
 columna.classList.add("col")

 let tarjeta =document.createElement("div")
 tarjeta.classList.add("card","h-100","shadow")


 let audio= document.createElement("audio")
 audio.classList.add("w-100")
audio.setAttribute("controls","controls")
audio.src = cancion.preview_url

let foto = document.createElement("img")
foto.classList.add("img-fluid","w-100")
foto.src = cancion.album.images[0].url

//padres e hijos
tarjeta.appendChild(foto)                                                 
tarjeta.appendChild(audio)
columna.appendChild(tarjeta)
fila.appendChild(columna)
 




})



}*/