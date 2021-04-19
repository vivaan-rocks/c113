//predifined functions of p5 library
function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
}
//custom functions
function take_snapshot(){
    save('s.png');
}
function filter_tint(){
    tint_color=document.getElementById("color").value;
}