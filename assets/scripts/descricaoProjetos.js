const exposicaoProjetos = document.querySelector('#projetos-da-categoria').children
const nomeProjeto = document.querySelector('#nome-projeto')
const descricaoProjeto = document.querySelector('#descricao-projeto')

exposicaoProjetos[0].children[0].addEventListener('mouseover', () => {mostrarDescricao()})
exposicaoProjetos[1].children[0].addEventListener('mouseover', () => {mostrarDescricao()})

exposicaoProjetos[0].children[0].addEventListener('mouseleave', () => {esconderDescricao()})
exposicaoProjetos[1].children[0].addEventListener('mouseleave', () => {esconderDescricao()})

function mostrarDescricao(){
    nomeProjeto.innerHTML = "InfoÁgua"
    descricaoProjeto.innerHTML = "O InfoÁgua é um projeto que nasceu da escola com uma proposta inovadora, sua principal funcionalidade é a denuncia de vazamento para a concessionária hidrica, contando com um sistema de recompensa para o denunciante. O projeto foi compeão Nacional da OBT (Olimpíada Brasileira de Tecnologia) na semana de Arte e Tecnologia em São José dos Campos."
}

function esconderDescricao(){
    nomeProjeto.innerHTML = ""
    descricaoProjeto.innerHTML = ""
}