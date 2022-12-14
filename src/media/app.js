 import * as lyrics from "./lyrics.js";

console.log(lyrics.default)

let song = document.getElementById("song")
let screen = document.querySelector(".App")

const screenLyrics = document.querySelector(".header__lyrics")


function playSong(){
    song.play()
    console.log(song.currentTime)
    mePuseLasGucci()
    screen.removeEventListener("click", playSong)

}
screen.addEventListener("click",playSong)



lyrics.default.forEach(element => {
    mePuseLasGucci(element.text, element.time)
});

function mePuseLasGucci(text, time){
    setTimeout(()=>{
        screenLyrics.innerHTML = text
    }, time)
}