class App {

    runApplication() {
       let naam = "MARIO!!"
       console.log(naam);
       console.log(this.classFunction());
    }
    classFunction() {
        let print = "BWAHAHAHA";
        console.log(this.function3());
        return print;
       
    }
    function3(){
        let som = (5 + 5)
        console.log(this.function4());
        return som;
    }
    function4(){
        let functie = "idk, niet creatief genoeg";
        console.log(functie);
    }
}
let app = new App();
app.runApplication();



