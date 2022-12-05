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
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "Grey";
        g.moveTo(70,20);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "Grey";
        g.moveTo(80,30);
        g.lineTo(80,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "Grey";
        g.moveTo(60,40);
        g.lineTo(60,60);
        g.lineTo(20,50);
        g.lineTo(20,30)
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "White";
        g.moveTo(40,35);
        g.lineTo(40,40);
        g.lineTo(40,50);
        g.lineTo(40,35);
        g.closePath();
        g.stroke();
        g.fill();



        console.log(canvas)
    }
}
let app = new App();
app.runApplication();


