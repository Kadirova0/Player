const playbutton = document.querySelector("#play-button");
const playbtnIcon = document.querySelector("#playbtn-icon");
const song = document.querySelector("#song");
const progressBar = document.querySelector("#progress-bar");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const cover = document.querySelector("#cover");
const singer = document.querySelector("#singer");
const name = document.querySelector("#name");

const songs = [
    {
        id: 0,
        name:"Fourth of July",
        src: "./song/songs/fourth-of-july.mp3",
        cover: "./player/img/fourth-of-july.jpeg",
        singer: "sufjan"
    },
    {
        id: 1,
        name:"Glimpse of us",
        src: "./song/songs/glimpse-of-us.mp3",
        cover: "./player/img/glimpse-of-us.jpeg",
        singer: "Joji"
    },
    {
        id: 2,
        name:"Indigo night",
        src: "./song/songs/indigo-night.mp3",
        cover: "./player/img/indigo-night.jpeg",
        singer: "Tamin"
    },
    {
        id: 3,
        name:"Remembrance",
        src: "./song/songs/remembrance.mp3",
        cover: "./player/img/remembrance.jpeg",
        singer: ""
    },
    {
        id: 4,
        name:"Summertime-sadness",
        src: "./song/songs/summertime-sadness.mp3",
        cover: "./player/img/summertime-sadness.jpeg",
        singer: ""
    },
]

let index = 0;
let isPlaying = false;

function pauseSong () {
    song.pause();

    isPlaying = false;
        playbtnIcon.classList.add("fa-play");
        playbtnIcon.classList.remove("fa-pause");
}

function palySong() {
    song.play();
    isPlaying = true;
       playbtnIcon.classList.remove("fa-play");
       playbtnIcon.classList.add("fa-pause");
}

prevBtn.onclick = () => {
    index = index === songs.length -1 ? 0 : index -1;
    song.src = songs[index].src;
    cover.src = songs[index].cover;
    name.innerHTML = songs[index].name;
    singer.innerHTML = songs[index].singer;
    palySong();
}


nextBtn.onclick = () => {
    index = index === songs.length -1 ? 0 : index +1;
    song.src = songs[index].src;
    cover.src = songs[index].cover;
    name.innerHTML = songs[index].name;
    singer.innerHTML = songs[index].singer;
    palySong();
}

playbutton.onclick =() => {
    isPlaying ? pauseSong() : palySong(); 
}

song.addEventListener("timeupdate", (e) => {
    const {duration, currentTime} = e.target;

    const percentage = (currentTime / duration) * 100;
    progressBar.style.width = `${percentage}%`;
})