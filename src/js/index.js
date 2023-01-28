const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;
console.log(linkDoVideo);

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    //Abrir modal na tela4
   alternarModal();
    video.setAttribute("src", linkDoVideo)
});

fecharModal.addEventListener("click", () => {
    //fechar modal
    alternarModal();
    video.setAttribute("src", "")
});



