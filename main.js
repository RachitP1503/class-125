noseX=0;
noseY=0;
diffrence=0;
leftWristX=0;
rightWristX=0;


function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded()
{
    console.log('posenet is initialized');
}

function gotPoses(results)
{
if(results.lenght>0)
{
    console.log(results);
     noseX=results[0].pose.nose.x;
     noseY=results[0].pose.nose.y;
     console.log("noseX ="+noseX+"noseY ="+noseY);

     leftWristX=results[0].pose.leftWrist.x;
     rightWristX=results[0].pose.rightWrist.x;
     diffrence=floor(leftWristX-rightWristX);
     console.log("leftWristX ="+leftWristX+"rightWrist ="+rightWristX+"diffrence ="+diffrence);

}
}

function draw()
{
    background('#969A97');
    document.getElementById("square_sides").innerHTML="Width and height of a square will be ="+diffrence+"px";
    fill('#fc0303');
    stroke('#fc0303');
    square(noseX,noseY,diffrence);
}
