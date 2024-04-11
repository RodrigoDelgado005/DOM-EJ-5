function sumarUno(){
    let sumar=document.getElementById('texto')
    let nuevovalor= parseInt(sumar.textContent)
    sumar.textContent = nuevovalor + 1;
  }