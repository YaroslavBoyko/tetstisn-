console.log("hello from console ");



function pageLoad()
{
    let canvas = document.getElementById("the_canvas");
    let context = canvas.getContext("2d");
    context.fillRect(1000,400, 50,50);

    context.beginPath();
    context.moveTo(200,300);
    context.lineWidth =2;
    context.strokeStyle = "blue";
    context.lineTo(120,324);
    context.lineTo(180,200);
    context.lineTo(200,120);
    context.stroke();

    context.beginPath();
    context.arc(300,200,40,0,Math.PI,true);
    //void ctx.arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
    context.stroke();


    context.font = '16px monospace';
    context.fillText("your texttttt here ", 500,50);
    context.font = '23 monospace';
    context.fillText("more text",500,10);

    //3 different fonts 
    context.font = 'Garamond';
    context.fillText("new font text garamond", 500,20);
    context.font = '40px Impact';
    context.fillText("commic font text ",500,90);
    context.font = '22 Palatino';
    context.fillText("palatino font new text ",500, 130);

    //4 squares blues color 
    context.beginPath();
    context.rect(0,0, 100,100);
    context.fillStyle = "blue";
    context.fill();

    context.beginPath();
    context.fillRect(0,1000, 100,100);

    context.beginPath();
    context.fillRect(1000,0, 100,100);

    context.beginPath();
    context.fillRect(1000,1000, 100,100);

    //other shapes 
    context.beginPath();
    context.moveTo(175,200);
    context.strokeStyle ="green";
    context.lineTo(300,275);
    context.lineTo(275,100);
    context.lineTo(100,275);
    context.fillStyle ="green";
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(300,500,150,150);
    context.fillStyle ="red";
    context.fill();

    context.beginPath();
    context.arc(400,300,60,Math.PI,true);
    context.fillStyle ="black";
    context.fill();

    context.beginPath();
    context.arc(400,300,50,Math.PI,true);
    context.fillStyle = "purple";
    context.fill();

    context.beginPath();
    context.arc(400,300, 40,Math.PI,true);
    context.fillStyle ="red";
    context.fill();

    context.beginPath();
    context.arc(400,300,20,Math.PI,true);
    context.fillStyle ="yellow";
    context.fill();


    context.beginPath();
    context.arc(600,400,60,Math.PI,true);
    context.fillStyle ="black";
    context.fill();

    context.beginPath();
    context.arc(600,400,50,Math.PI,true);
    context.fillStyle = "purple";
    context.fill();

    context.beginPath();
    context.arc(600,400, 40,Math.PI,true);
    context.fillStyle ="red";
    context.fill();

    context.beginPath();
    context.arc(600,400,20,Math.PI,true);
    context.fillStyle ="yellow";
    context.fill();


    context.beginPath();
    context.moveTo(500,300);
    context.lineTo(500,300);
    context.strokeStyle= "black";
    context.stroke();



















    var newImg = new Image();
    newImg.src = "banana.png"
    newImg.onload = function () 
    {
        context.drawImage(newImg,400,800,150,150);
    }


}


pageLoad();//loads function 

