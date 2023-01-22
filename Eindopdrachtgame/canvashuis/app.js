class App
 {

    runApplication() 
    {
        console.log("Hello world!");
        let canvas = document.getElementById("canvasID");
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);
        g.beginPath()
        g.fillStyle = "Red";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "Grey";
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "Grey";
        g.moveTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "Grey";
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.lineTo(200,300)
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "White";
        g.moveTo(350,350);
        g.lineTo(450,450);
        g.lineTo(450,550);
        g.lineTo(400,350);
        g.closePath();
        g.stroke();
        g.fill();



        console.log(canvas)
    }
}
let app = new App();
app.runApplication();


