function preload()
{

}

function setup()
{
    canvas = createCanvas(800, 800);
    canvas.center();
    video = createCapture(VIDEO);
    video.position(200,200); 
    video.hide();
}

function draw()
{
  image(video, 200, 200, 400, 400);
   fill("pink");
   stroke("white");
   circle(50,50,60);
   circle(50,750,60);
   circle(750,50,60);
   circle(750,750,60);
   fill("cyan");
   stroke("cornflowerblue");
   rect(90,50,620,20);
   rect(90,750,620,20);
   rect(40,100,20,620);
   rect(750,100,20,620);   
}

function take_snapshot()
{
  save('Neurosurgeon.png');  
}
