noseX = 0;
noseY = 0;

function preload()
{
    lips_filter = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet has been initialized');
}

function draw()
{
    image(video,0,0,300,300);
    image(lips_filter, noseX, noseY, 20, 20);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 10;
        console.log("nose X = " + noseX);
        console.log("nose Y = " + noseY);
    }
}

function takesnapshot()
{
    save('myfilterimage.png')
}


























function preload()
{

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is loaded.');
}

function draw()
{
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose Y = " + results[0].pose.nose.y);
    }
}