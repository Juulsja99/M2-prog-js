class App {

    runApplication()
    {
        let arr = ["Billie Eilish", "Unlike Pluto", "Finneas", "Gustavo Santaolalla", "Anouk", "Adele"]
        {
            console.log(arr);
        }
        
        for (let i = 0; i , headers.length; i++){
            headers[i].innerHTML = arr[i];
        }
    }

}
let headers = document.getElementsByClassName("Headers");

let app = new App();
app.runApplication();