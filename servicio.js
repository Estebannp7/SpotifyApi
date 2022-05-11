//Pasos para consumir un api con JS PURO
//DECLARO LA URI(pa donde voy)
const URI ="https://api.spotify.com/v1/artists/716NhGYqD1jl2wI1Qkgq36/top-tracks?market=US" 

//2. DECLARO LOS PARAMETROS DE LA PETICION (QUE VOY A HACER)

const TOKEN = "Bearer BQCYb6IRliFg8UQzAZpbf3XvARQuCqJYzf4a-3aJ-316jnIHYxRuPHkXEnW7XVv4LXS9zPeOg237RoYgdKipc6aME0Q6yeibi_ZWsqfMehr_oeOs7-aAp-jcFSO4TmuB1xxwAiii6QDPziFspsuInRkgNzyD624YhnI"

const PETICION ={

method:"GET",
headers: {Authorization:TOKEN}

}
// DECLARO EL FETCH(VOY AL SERVIDOR)
fetch(URI,PETICION)
.then(function(respuesta){

return (respuesta.json())

})
.then(function(respuesta){

    console.log(respuesta)//respuesta es un objeto
    console.log(respuesta.tracks)

    console.log(respuesta.tracks[1].preview_url)
})
.catch(function(){
    console.log(respuesta)
})