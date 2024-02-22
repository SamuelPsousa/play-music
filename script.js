

document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playlist = document.getElementById('playlist');
    const songs = playlist.getElementsByTagName('li');

    for (let i = 0; i < songs.length; i++) {
        songs[i].addEventListener('click', function () {
            const src = this.getAttribute('data-src');
            audioPlayer.src = src;
            audioPlayer.src = src;
            audioPlayer.play();
        });
    }
});


/* script do botão*/

document.addEventListener('DOMContentLoaded', function () {
    const likeButton = document.getElementById('likeButton');
    const likeCountDisplay = document.getElementById('likeCount');
    let likeCount = localStorage.getItem('likes') ? parseInt(localStorage.getItem('likes'), 10) : 0;

    // Atualiza a contagem de curtidas na tela
    function updateLikeCount() {
        likeCountDisplay.textContent = `${likeCount} curtidas`;
    }

    // Inicializa a contagem de curtidas ao carregar a página
    updateLikeCount();

    likeButton.addEventListener('click', function () {
        likeCount++; // Incrementa a contagem
        localStorage.setItem('likes', likeCount); // Atualiza o valor no localStorage
        updateLikeCount(); // Atualiza a contagem na tela

        this.classList.add('liked');
        setTimeout(() => this.classList.remove('liked'), 1000); // Remove a classe após 1 segundo para visualização
    });
});

