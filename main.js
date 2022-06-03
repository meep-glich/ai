song = "";
leftWX = 0;
leftWy = 0;

rightWy = 0;
rightWx = 0;
function setup(){
canvas = createCanvas(450, 350);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 450, 350);
}
function preload(){
    song = loadSound("music.mp3");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftWX = results[0].pose.leftWrist.x;
        leftWY = results[0].pose.leftWrist.y;
        console.log("leftWX ="+ leftWX +"leftWY ="+leftWY);

        rightWX = results[0].pose.rightWrist.x;
        rightWY = results[0].pose.rightWrist.y;
        console.log("rightWX ="+ rightWX +"leftWY ="+rightWY);
    }
}
function modelLoaded(){
    console.log('posenet is initialized');
}
