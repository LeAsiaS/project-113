function preload(){

}
function setup(){
canvas=createCanvas(640,480);
canvas.position(150,150);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
    image(video,230,150,220,200);
    tint(tint_color);
    fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);
circle(50,450,80);
circle(590,50,80);
circle(590,450,80);
fill(0,255,0);
stroke(0,255,0);
rect(90,40,460,20)
rect(90,440,460,20)
rect(40,90,25,325)
rect(580,90,25,320)
}
function take_snapshot(){
    save('LeAsia.png');
}
function filter_tint(){
tint_color=document.getElementById("color_name").value;
}