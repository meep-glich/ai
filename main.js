song = "";
function setup(){
canvas = createCanvas(450, 350);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 0, 0, 450, 350);
}
function preload(){
    song = loadSound("music.mp3");
}
function play(){
    song.play();
}