"use strict";

class App
{
    runApplication()
    {
        for (let tafel = 1; tafel <=50; tafel++) {    
        for (let keer = 1; keer < 50; keer++) {    
         
            console.log(tafel,"*",keer,"=",tafel *keer);
         }                   
        }
    }   
}
let app = new App();
app.runApplication()