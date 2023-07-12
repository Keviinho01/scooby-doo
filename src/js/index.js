const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' });
        }

        removerSelecaoDoPersonagem();
        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagem(personagem);
        
        
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomepersonagem = document.getElementById('nome-personagem');
    nomepersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const IdPersonagem = personagem.attributes.id.value;

    imagemPersonagemGrande.src = `./src/Imagens/card-${IdPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
