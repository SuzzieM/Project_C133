img = " ";
status = " ";
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";

}

function modelLoaded()
{
    console.log("Model is Loaded and Intialized!!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function preload()
{
   img = loadImage("Study area.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420);

    if (status != " ")
    {
        for( i = 0; i <objects.length; i++)
        {
        document.getElementById("status").innerHTML = "Status : Objects Detected";
        fill("#BF4072");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label + " " + percent + "% " ,  objects[i].x + 15 , objects[i].y + 15);
        noFill();
        stroke("#BF4072");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }

}
function gotResult(error, results)
{
   if(error)
   {
    console.log(error);
   }
   else
   {
    console.log(results);
    objects = results;
   }
}