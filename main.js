function preload()
{

}

function setup()
{
        canvas=createCanvas(650,480);
        canvas.position(450,190);
        video = createCapture(VIDEO);
        video.hide();
}

function draw()
{
        image(video,230,150,200,220);
        fill("red");
        stroke("yellow");
        rect(90,40,460,20);
        rect(90,420,460,20);
        rect(40,90,20,300);
        rect(580,90,20,300);

        fill("black");
        stroke("yellow");
        rect(90,40,460,10);
        rect(90,430,460,10);
        rect(40,90,10,320);
        rect(590,90,10,300);
        
        fill("black");
        stroke("yellow");
        rect(90,40,460,5);
        rect(90,430,460,5);
        rect(40,90,5,320);
        rect(590,90,5,300);
        
        fill("black");
        stroke("red");
        circle(50,50,80);
        circle(50,430,80);
        circle(590,50,80);
        circle(590,430,80);

        fill("red");
        stroke("yellow");
        circle(50,50,70);
        circle(50,430,70);
        circle(590,50,70);
        circle(590,430,70);

        fill("yellow");
        stroke("red");
        circle(50,50,60);
        circle(50,430,60);
        circle(590,50,60);
        circle(590,430,60);

        fill("red");
        stroke("yellow");
        circle(50,50,50);
        circle(50,430,50);
        circle(590,50,50);
        circle(590,430,50);

        fill("yellow");
        stroke("black");
        circle(50,50,40);
        circle(50,430,40);
        circle(590,50,40);
        circle(590,430,40);
}

function take_snapshot(){
        save('image.png')
    }


      