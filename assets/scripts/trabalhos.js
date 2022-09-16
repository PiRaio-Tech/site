const botoesTrabalhos = document.querySelectorAll('.legenda')

const btnSoftware = document.querySelector('#software')
const btnInovacao = document.querySelector('#inovacao')
const btnIa = document.querySelector('#ia')
const btnAutomacao = document.querySelector('#automacao')

const exposicaoTrabalhos = document.querySelector('#projetos-da-categoria').children

btnSoftware.addEventListener('click', () => {selecionar(0, btnSoftware)})
btnInovacao.addEventListener('click', () => {selecionar(1, btnInovacao)})
btnIa.addEventListener('click', () => {selecionar(2, btnIa)})
btnAutomacao.addEventListener('click', () => {selecionar(3, btnAutomacao)})

botoesTrabalhos.forEach(item => {
    item.addEventListener('mouseover', () => {escurecer(item)})
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

function selecionar(id, target){
    for(i=0; i<4; i++){
        if(id == i){
            exposicaoTrabalhos[id].style = 'display: flex'
            continue
        }
        exposicaoTrabalhos[i].style = 'display: none'
    }
}