export function pintarCanciones(canciones){

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
    
    
    
    }