const botoesTrabalhos = document.querySelectorAll('.legenda')

const btnSoftware = document.querySelector('#software')
const btnInovacao = document.querySelector('#inovacao')
const btnIa = document.querySelector('#ia')
const btnAutomacao = document.querySelector('#automacao')

btnSoftware.addEventListener('click', () => {selecionar("#projeto-software", btnSoftware)})
btnInovacao.addEventListener('click', () => {selecionar("#projeto-inovacao", btnInovacao)})
btnIa.addEventListener('click', () => {selecionar("#projeto-ia", btnIa)})
btnAutomacao.addEventListener('click', () => {selecionar("#projeto-automacao", btnAutomacao)})

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
    document.querySelector(id).style = 'display: flex'
}