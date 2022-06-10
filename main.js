function setup(){
    canvas=createCanvas(400,400)
    canvas.position(560,150)
    video=createCapture(VIDEO)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotposes)
}
function modelLoaded(){
    console.log("model is loaded" )
}
function draw(){
    background('lightblue')
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
    }
}