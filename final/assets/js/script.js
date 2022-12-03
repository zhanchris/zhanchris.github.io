let fallButton = document.getElementById("season");
let playButton = document.getElementById("play");
let springImg = document.getElementById("bg-img");
let blkRec = document.getElementById("black-rectangle");
let springBool = true;
let video = document.getElementById('video');

function changeImgToFall() {
    blkRec.classList.add("darken");
    setTimeout(function(){
        springImg.src="assets/img/sanFranFall.jpg";
    }, 200);
    setTimeout(function(){
        blkRec.classList.add("lighten");
    }, 600);

    setTimeout(function(){
        blkRec.classList.remove("darken");
        blkRec.classList.remove("lighten");
    }, 1000);
    document.getElementById("season-text").innerHTML = "Fall."

    video.src = "https://www.youtube.com/embed/JrfHZpLZdV8?controls" /*"assets/img/fall 2021.mp4" */

    fallButton.classList.remove("spring");
    fallButton.classList.add("fall")
    document.getElementById("season-button-text").innerHTML = "Spring?";

    playButton.classList.remove("play-spring");
    playButton.classList.add("play-fall");

    springBool = false;
}

function changeImgToSpring() {
    
    blkRec.classList.add("darken");
    setTimeout(function(){
        springImg.src="assets/img/sanFranSpring.jpg";
    }, 200);
    setTimeout(function(){
        blkRec.classList.add("lighten");
    }, 600);

    setTimeout(function(){
        blkRec.classList.remove("darken");
        blkRec.classList.remove("lighten");
    }, 1000);

    document.getElementById("season-text").innerHTML = "Spring."

    video.src = "https://www.youtube.com/embed/JrfHZpLZdV8?controls"/*"assets/img/spring 2022.mp4"*/

    fallButton.classList.remove("fall");
    fallButton.classList.add("spring")
    document.getElementById("season-button-text").innerHTML = "Fall?";

    playButton.classList.remove("play-fall");
    playButton.classList.add("play-spring");

    springBool = true;
    
}

fallButton.onclick = function() {
    if (springBool) {
        changeImgToFall();
    }
    else {
        changeImgToSpring();
    }
}

let mts = document.getElementById('mts');
var iframeID = "video"; 

document.getElementById('play').onclick = function () {
    video.classList.remove("invisible");
    document.getElementById("vid-con").classList.remove("invisible");
    video.classList.add("visible");
    mts.classList.add("invisible");
    blkRec.classList.remove("visible")
    blkRec.classList.add("invisible");
    document.getElementById("vid-con").classList.add("partial-visible");
    document.getElementById("vid-con").classList.remove("noHover");
    blkRec.style.visibility = "hidden";

}

let pauseBtn = document.getElementById('ps');
let paused = false;

pauseBtn.onclick = function() {
    if (!paused) {
        video.pause();
        document.getElementById("pause-text").innerHTML = "PLAY";
        paused = true;
    } else {
        video.play();
        document.getElementById("pause-text").innerHTML = "PAUSE";
        paused = false;
    }
}

let closeBtn = document.getElementById('close');

closeBtn.onclick = function() {
    video.classList.remove("visible");
    video.classList.add("invisible");
    mts.classList.remove("invisible");
    mts.classList.add("visible");
    blkRec.classList.remove("invisible")
    blkRec.classList.add("invisible");
    document.getElementById("vid-con").classList.remove("partial-visible");
    document.getElementById("vid-con").classList.add("noHover");
    blkRec.style.visibility = "visible";

}
