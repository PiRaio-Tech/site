const btnRedes = document.querySelector(".btnRedes") 
const listaRedes = document.querySelector(".listaRedes") 



let redes = false

btnRedes.addEventListener('click', () => {
    if (redes){
        listaRedes.style = 'display: none'
        redes = false
    }else{
        listaRedes.style = 'display: inline-block'
        redes = true
    }
})  