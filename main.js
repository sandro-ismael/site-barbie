const modalContainer = document.getElementById("modalContainer")
const openModal = document.getElementById("openModal")
const youtubeIframe = document.getElementById("youtubeIframe")
let music = document.getElementById("music");
let IconMutedAudio = document.getElementsByClassName("ph-speaker-slash");
let IconPlaydAudio = document.getElementsByClassName("ph-speaker-high");

openModal.addEventListener("click", function () {
    modalContainer.style.display = 'block';
})

window.addEventListener("click", function (e) {
    if (e.target == modalContainer) {
        modalContainer.style.display = 'none'
        youtubeIframe.src = youtubeIframe.src;
    }
})

function playAudio() {
    music.muted = false;
    music.play()
    IconPlaydAudio[0].style.display = 'none'
    IconMutedAudio[0].style.display = 'block'
}


function mutedAudio() {
    music.muted = true;
    IconMutedAudio[0].style.display = 'none'
    IconPlaydAudio[0].style.display = 'block'
}



