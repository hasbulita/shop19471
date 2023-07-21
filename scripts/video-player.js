const video = document.getElementById("myVideo");
const btnPlay = document.getElementById("play");
const btnMute = document.getElementById("mute");
const musicName = document.querySelector(".video__tittle");
const actor = document.querySelector(".video__text");
const playlist = ['music1','music2','music3'];
const playname = ['music','beatidul music','star music'];
const playactor = ['kakoito chel','anonim','neizvestnii chel'];
let number = 0

function play() {
    if (video.paused){
        video.play();
        btnPlay.innerHTML = "pause"
    }
    else {
        video.pause()
        btnPlay.innerHTML = "play"

        
    }
}
function mute() {
    if(video.muted) {
        video.muted = false
        btnMute.innerHTML = "mute"
    }
    else {
        video.muted = true
        btnMute.innerHTML = "unmute"
    }
}
function next() {
    if (number < playlist.length -1){
    number++}
    else {
        number = 0
    }
    video.src =`video/${playlist[number]}.mp4`;
    musicName.innerHTML = playname[number];
    actor.innerHTML = playactor[number];
}
function prev() {
    if(number != 0){
    number--}
    else{
        number = playlist.length -1
    }
    video.src =`video/${playlist[number]}.mp4`;
    musicName.innerHTML = playname[number];
    actor.innerHTML = playactor[number];
}