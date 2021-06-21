// Musicas //
const musicas = [{
        artist: "Trevor Daniel",
        name: "Falling",
        src: "./src/media/musics/Trevor Daniel - Falling.m4a",
        img: "./src/media/caratula/trevor.png"
    },
    {
        artist: "Zendeya",
        name: "Replay",
        src: "./src/media/musics/Zendaya - Replay.mp3",
        img: "./src/media/caratula/zendaya.jpg"
    },
    {
        artist: "Salem Ilese",
        name: "Mad at Disney",
        src: "./src/media/musics/Salem Ilese - Mad at Disney.mp3",
        img: "./src/media/caratula/salem.jpg"
    },
    {
        artist: "Camilo",
        name: "Millones",
        src: "./src/media/musics/Camilo - Millones.mp3",
        img: "./src/media/caratula/camilo.jpg"
    },
    {
        artist: "Bad Bunny",
        name: "Yonaguni",
        src: "./src/media/musics/Bad Bunny - Yonaguni.mp3",
        img: "./src/media/caratula/badbunny.jpg"
    },
    {
        artist: "Neutro Shorty",
        name: "Pecador",
        src: "./src/media/musics/Neutro - Pecador.mp3",
        img: "./src/media/caratula/neutro.jpg"
    }
];

let i = 0;

root_.setProperty('--img', `url(../../${musicas[i].img})`);

s_('.name').textContent = musicas[i].artist;
s_('.nameMusic').textContent = musicas[i].name;



// --- Adding Variables ---
let audio, playbtn, mutebtn, seeking, curtimetext, durtimetext, volumeslider;

// ¡--- Prinipal Function ---!
function initAudioPlayer() {
    // ---- ¡ Adding Song ! ----
    audio = new Audio();
    audio.src = musicas[i].src;
    audio.preload = true;

    // --- Set Object References ---
    playbtn = document.querySelector('#play');
    pausebtn = document.querySelector('#pause');
    mutebtn = document.querySelector('#mutebtn');
    //seekslider = document.querySelector('#seekslider');
    volumeslider = document.querySelector('#volumeslider');
    curtimetext = document.querySelector('#curtimetext');
    durtimetext = document.querySelector('#durtimetext');


    // --- Add Event references ---
    playbtn.addEventListener("click", playPause);
    pausebtn.addEventListener("click", playPause);

    // mutebtn.addEventListener("click", mute);

    volumeslider.addEventListener("mousemove", setVolume)
    audio.addEventListener("timeupdate", function() { seektimeupdate(); })

    // --- Functions ---
    function playPause() {
    	audio.autoplay = true;
        if (audio.paused) {
            audio.play();
            s_('#play').style.display = "none";
            s_('#pause').style.display = "inline-flex";
        } else {
            audio.pause()
            s_('#play').style.display = "inline-flex";
            s_('#pause').style.display = "none";
        };


        // Continuar musica
        audio.addEventListener('ended', () => {
            try {
                i = i + 1;
                audio.src = musicas[i].src;
                root_.setProperty('--img', `url(../../${musicas[i].img})`);
                s_('.name').textContent = musicas[i].artist;
                s_('.nameMusic').textContent = musicas[i].name;
            } catch {
                i = i - 1;
                alert('No hay mas musicas :C')
            }
});
    };


    function mute() {
        if (audio.muted) {
            audio.muted = false;
        } else {
            audio.muted = true;
        }
    };


    function setVolume() {
        audio.volume = volumeslider.value / 100;
    }


    function seektimeupdate() {
        var nt = audio.currentTime * (100 / audio.duration);
        // seekslider.value = nt;
        var curmins = Math.floor(audio.currentTime / 60);
        var cursecs = Math.floor(audio.currentTime - curmins * 60);
        var durmins = Math.floor(audio.duration / 60);
        var dursecs = Math.floor(audio.duration - durmins * 60);
        if (cursecs < 10) { cursecs = "0" + cursecs; }
        if (dursecs < 10) { dursecs = "0" + dursecs; }
        if (curmins < 10) { curmins = "0" + curmins; }
        if (durmins < 10) { durmins = "0" + durmins; }
        curtimetext.innerHTML = curmins + ":" + cursecs;
        durtimetext.innerHTML = durmins + ":" + dursecs;
    }
};

window.addEventListener("load", initAudioPlayer);