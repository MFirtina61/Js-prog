class App
{
    run(){
        let canvas = document.getElementById('canvasId');
        let g = canvas.getContext('2d');
        g.canvas.width  = window.innerWidth;
        g.canvas.height = window.innerHeight;
        this.tekenHuis(100,100,g);
        this.tekenHuis(430,200,g);
    }
    Mario()
    {
        console.log("MARIO!!")
    }
    Bwah()
    {
        return("Bwah");
    }
    getallen()
    {
        let result = 2 + 2;
        console.log(result);
    }
    tekenHuis(x,y,g)
    {
       
       
        let black = "#735F32";
        

        
        g.beginPath();
        console.log('done')
        g.moveTo(x,y);
        g.lineTo(x+150, y+50);
        g.lineTo(x+350,y+100);
        g.lineTo(x+300,y+200);
        g.lineTo(x+100,y+150);
        g.lineTo(x+150,y+50);
        g.fillStyle = black;
        g.fill();
        g.closePath();

        g.beginPath();
        g.moveTo(x+100,y+150);
        g.lineTo(x+100,y+250);
        g.lineTo(x+300,y+300);
        g.lineTo(x+300,y+200);
        g.lineTo(x+100,y+150);
        g.fillStyle = black;
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle = black;
        g.moveTo(x+300, y+200);
        g.lineTo(x+300, y+300);
        g.lineTo(x+400, y+250);
        g.lineTo(x+400, y+150);
        g.lineTo(x+350, y+100);
        g.lineTo(x+300, y+200);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath(); 
        g.moveTo(x+300, y+250);
        g.lineTo(x+325, y+235);
        g.lineTo(x+325, y+287.5)
        g.lineTo(x+325, y+235)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.moveTo(x+137.5,y+225);
        g.lineTo(x+225, y+245);
        g.lineTo(x+245, y+200);
        g.lineTo(x+145, y+182.5);
        g.closePath();
        g.stroke();
        g.fill();
        
    }
}
let app = new App();
app.run();
app.Mario();
console.log(app.Bwah());
app.getallen();