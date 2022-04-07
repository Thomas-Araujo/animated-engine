status1="";
img="";
objects=[];
function setup(){
    canvas=createCanvas(650,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status-detecting objects";
}
function preload(){
    img=loadImage("dog_cat.jpg");
}
function draw(){
    image(img,0,0,650,420);
    if(status1!=""){
        for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status-object detected";
        fill("#0000FF");
    text(objects[i].label,objects[i].x,objects[i].y);
    noFill();
    stroke("#0000FF");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function modelLoaded(){
    console.log("modelLoaded");
    status1=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}