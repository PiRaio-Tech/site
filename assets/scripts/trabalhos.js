const botoesTrabalhos = document.querySelectorAll('.legenda')

botoesTrabalhos.forEach(item => {
    item.addEventListener('mouseover', () => {escurecer(item)})
})

botoesTrabalhos.forEach(item => {
    item.addEventListener('mouseleave', () => {clarear()})
})

function escurecer(elemento){
    botoesTrabalhos.forEach(item => {
        if(item != elemento){
            item.children[0].classList.add('naoSelecionado')
        }else{
            item.children[0].classList.add('selecionado')
        }
    })
}

function clarear(){
    botoesTrabalhos.forEach(item => {
        item.children[0].classList.remove('selecionado')
        item.children[0].classList.remove('naoSelecionado')
    })
}