//. Notitie voor docent.
//. Dit moet natuurlijk allemaal veel makkelijker kunnen door bijv gebruik te maken van loops
//. Dit heb ik geprobeerd maar het wou maar niet werken, mijn site wou erdoor niet meer laden
//. Zou het mogelijk zijn dat ik de oplossing voor de cirkel opdracht uit de loop les kan zien?
//. p.s. Ik ben geen artiest dus het is niet heel mooi hahaha

class App{
    
    runApplication(){
        let canvas = document.getElementById("canvasID");
        let g = canvas.getContext("2d");
        let ctx = canvas.getContext('2d');

       //. Achtergrond
        g.fillStyle = "#000033";
        g.fillRect(0,0,900,1200);

        //. maan
        g.beginPath();
        g.fillStyle = "White"
        g.arc(750,100,60,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();



        //. sneeuw achtergrond
        g.beginPath();
        g.fillStyle = "#cceeff"
        g.moveTo(50,800)
        g.lineTo(0,1200);
        g.lineTo(900,1200);
        g.lineTo(850,800);
        g.closePath();
        g.stroke();
        g.fill();

        //. text
        ctx.font = 'bold 88px Helvetica Neue';
        ctx.fillStyle = '#e60000';
        ctx.fillText("Fijne kerst!", 225, 1150)

        //. huis 1
        g.beginPath();
        g.fillStyle = "#2d862d";
        g.moveTo(50,800);
        g.lineTo(300,800);
        g.lineTo(300,600);
        g.lineTo(50,600);
        g.closePath();
        g.stroke();
        g.fill();
        //. dak
        g.beginPath();
        g.fillStyle = "#b32400";
        g.moveTo(50,600);
        g.lineTo(175,400);
        g.lineTo(300,600);
        g.closePath();
        g.stroke();
        g.fill();
        //.raam 1
        g.beginPath();
        g.fillStyle = "#ffff33";
        g.moveTo(60,630);
        g.lineTo(100,630);
        g.lineTo(100,670);
        g.lineTo(60,670);
        g.closePath();
        g.stroke();
        g.fill();
        //. raam 2
        g.beginPath();
        g.fillStyle = "#ffff33";
        g.moveTo(290,630);
        g.lineTo(200,630);
        g.lineTo(200,670);
        g.lineTo(290,670);
        g.closePath();
        g.stroke();
        g.fill();
        //. deur
        g.beginPath();
        g.fillStyle = "#802b00";
        g.moveTo(135,700);
        g.lineTo(215,700);
        g.lineTo(215,800);
        g.lineTo(135,800);
        g.closePath();
        g.stroke();
        g.fill();
        //.deurknop
        g.beginPath();
        g.fillStyle = "White"
        g.arc(200,750,5,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();


        //. kerk
        g.beginPath();
        g.fillStyle = "#993300";
        g.moveTo(350,800);
        g.lineTo(500,800);
        g.lineTo(500,450);
        g.lineTo(350,450);
        g.closePath();
        g.stroke();
        g.fill();
        //. dak
        g.beginPath();
        g.fillStyle = "#993300";
        g.moveTo(350,450);
        g.lineTo(425,300);
        g.lineTo(500,450);
        g.closePath();
        g.stroke();
        g.fill();
        //.klok
        g.beginPath();
        g.fillStyle = "Yellow"
        g.arc(425,400,20,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //. deur
        g.beginPath();
        g.fillStyle = "Black";
        g.moveTo(400,700);
        g.lineTo(450,700);
        g.lineTo(450,800);
        g.lineTo(400,800);
        g.closePath();
        g.stroke();
        g.fill();
        //.deurknop
        g.beginPath();
        g.fillStyle = "Yellow"
        g.arc(440,750,5,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.raam
        g.beginPath();
        g.fillStyle = "Yellow";
        g.moveTo(380,500);
        g.lineTo(470,500);
        g.lineTo(470,650);
        g.lineTo(380,650);
        g.closePath();
        g.stroke();
        g.fill();


        //.Boomstam
        g.beginPath();
        g.fillStyle = "#4d1a00";
        g.moveTo(650,800);
        g.lineTo(700,800);
        g.lineTo(700,700);
        g.lineTo(650,700);
        g.closePath();
        g.stroke();
        g.fill();
        //.groen1
        g.beginPath();
        g.fillStyle = "Green";
        g.moveTo(550,700);
        g.lineTo(675,600);
        g.lineTo(800,700);
        g.closePath();
        g.stroke();
        g.fill();
        //.groen2
        g.beginPath();
        g.fillStyle = "Green";
        g.moveTo(550,620);
        g.lineTo(675,500);
        g.lineTo(800,620);
        g.closePath();
        g.stroke();
        g.fill();
        //.groen3
        g.beginPath();
        g.fillStyle = "Green";
        g.moveTo(550,520);
        g.lineTo(675,400);
        g.lineTo(800,520);
        g.closePath();
        g.stroke();
        g.fill();
        //.bal1
        g.beginPath();
        g.fillStyle = "#ff1a8c"
        g.arc(560,700,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.bal2
        g.beginPath();
        g.fillStyle = "#8000ff"
        g.arc(690,680,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.bal3
        g.beginPath();
        g.fillStyle = "Red"
        g.arc(790,520,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.bal4
        g.beginPath();
        g.fillStyle = "Blue"
        g.arc(740,600,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.bal5
        g.beginPath();
        g.fillStyle = "Yellow"
        g.arc(700,550,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.bal6
        g.beginPath();
        g.fillStyle = "#8000ff"
        g.arc(660,480,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.bal7
        g.beginPath();
        g.fillStyle = "#ff1a8c"
        g.arc(560,620,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.bal8
        g.beginPath();
        g.fillStyle = "#ff1a8c"
        g.arc(560,520,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.bal9
        g.beginPath();
        g.fillStyle = "Red"
        g.arc(800,700,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.bal10
        g.beginPath();
        g.fillStyle = "Red"
        g.arc(800,620,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.bal11
        g.beginPath();
        g.fillStyle = "Blue"
        g.arc(640,640,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.bal12
        g.beginPath();
        g.fillStyle = "#ff6600"
        g.arc(640,580,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.bal13
        g.beginPath();
        g.fillStyle = "#ff6600"
        g.arc(690,430,8,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();

        //.sneeuwman 1
        g.beginPath();
        g.fillStyle = "White"
        g.arc(300,1000,40,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.sneeuwman 2
        g.beginPath();
        g.fillStyle = "White"
        g.arc(300,940,37,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.sneeuwman 3
        g.beginPath();
        g.fillStyle = "White"
        g.arc(300,890,33,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.neus
        g.beginPath();
        g.fillStyle = "#ff6600";
        g.moveTo(310,900);
        g.lineTo(310,890);
        g.lineTo(340,900);
        g.closePath();
        g.stroke();
        g.fill();
        //.oog1
        g.beginPath();
        g.fillStyle = "Black"
        g.arc(310,880,3,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();
        //.oog 2
        g.beginPath();
        g.fillStyle = "Black"
        g.arc(300,880,3,0,Math.PI*2)
        g.closePath();
        g.stroke();
        g.fill();












    }

}
let app = new App();
app.runApplication();

