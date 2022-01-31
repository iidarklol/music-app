

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    music1 = loadSound("music.mp3");    
}

function draw(){
    image(video,0,0,600,530);}  





    song = " ";
score = 0;
lwx = 0;
lwy = 0;
rwx= 0;
rwy = 0;
rscore = 0; 
function preload(){
song = loadSound("music.mp3")
}

function setup(){
canvas = createCanvas(600,500)
canvas.center()
video = createCapture(VIDEO) 
video.hide()
posenet = ml5.poseNet(video, modelLoaded)
posenet.on("pose",gotResults)
}


function modelLoaded(){ 
    console.log("PoseNet Loaded!");
}


function gotResults(results){
console.log(results);
    if(results.length > 0){
lwx = results[0].pose.leftWrist.x
lwy = results[0].pose.leftWrist.y
rwx = results[0].pose.rightWrist.x
rwy = results[0].pose.rightWrist.y
score = results[0].pose.keypoints[9].score  
rscore = results[0].pose.keypoints[10].score 
}
}


function draw(){
image(video,0,0,600,500)

fill("#DC143C")
stroke("#DC143C")



if(score > 0.2){
    circle(lwx,lwy,20)
    volume = floor(lwy)
    volume = volume/500
    song.setVolume(1-volume)
}


if(rscore > 0.2){
    circle(rwx,rwy,20)
    rate = Number(rwy)*.005
    song.rate(2.5 - rate)

}

}   





function play(){
 song.play()  
 song.setVolume(1)
 song.rate(1)
  
}


