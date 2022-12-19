"use strict";

class App
{
    runApplication()
    {
        let arr = ["Lloris","Ronaldo","Mbappe", "Messi","Neymar"]
        console.log(arr)

        let headers = document.getElementsByClassName("voetballers")

        for (let i = 0; i < headers.length; i++) {
            headers[i].innerHTML = arr[i];
            
        }

    } 
    
    rondjes(x, y)
    {
        g.beginpath();
        g.fillStyle = "red";
        g.arc(400,300,20,0,Math.PI*2);
        g.strok();
        g.fill();
        g.closePath();
    }
}
let app = new App();
app.runApplication()