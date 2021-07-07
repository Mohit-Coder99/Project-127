dynamite_song = "";
ignite_song = "";

function preload(){
     dynamite_song = loadSound("dynamite.mp3");
     ignite_song = loadSound("ignite.mp3");
}

function setup(){
     canvas = createCanvas(600, 430);
     canvas.center();

     video = createCapture(VIDEO);
     video.hide();
}

function draw(){
     image(video, 0, 0, 600, 430);
}