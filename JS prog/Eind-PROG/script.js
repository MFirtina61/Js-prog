
window.onload = canvas;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


//zon
var yZon = 350;
var xZon = 600;
var radius = 300;
var zonKleur = "#FFFDD0";

//pilaar H en B
var Bpilaar = 75;
var Hpilaar = 500;
//pilaar
var AchterKleurPaal = "#F2921D";
var ActerStandje = "#CC7722";
var VoorKleurPaal = "#FCD12A";
var VoorKleurStandje = "#EDAE0F";

//berg
var bergVoor1 = "#FBBF50";
var bergAchter1 = "#FAAD1E";
var bergVoor2 = "#F4A23E";
var bergAchter2 = "#FFBF00";

//base
var BaseKleur = "#EDAE0F";
var binnenBaseKleur = "#FBCA37";

//achter raam kleur
var achterRaamKleur = "#D97D0D";
var achterRaamGrote = 50;
//voor raam
var voorRaamKleur = "#F8CE55";
var voorRaamGrote = 40.5;

//deur
var Bdeur = 125;
//deur kleur
var deurKleur = "#D97D0D";
var blokKleur = "#F2921D";

//wolk
var context;
var r = 50;
var x = -r;


//ZON
class zon1 {
  constructor() {
    this.yZon;
    this.xZon;
    this.radius;
    this.zonKleur;
  }
  tekenZon(ctx) {
    ctx.beginPath();
    ctx.fillStyle = zonKleur;
    ctx.arc(xZon, yZon, radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }
}

class moskeebase {
  constructor() {
    this.BaseKleur;
    this.binnenBaseKleur;
  }
  tekenBase(ctx) {
    //base
    ctx.beginPath();
    ctx.fillStyle = BaseKleur;
    ctx.arc(600, 700, 350, Math.PI, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
    //base vierkant
    ctx.beginPath();
    ctx.fillStyle = BaseKleur;
    ctx.fillRect(250, 700, 700, 150);
    ctx.fill();
    ctx.closePath();

    //boven binnen kant
    ctx.beginPath();
    ctx.fillStyle = binnenBaseKleur;
    ctx.arc(600, 700, 320, Math.PI, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
    //onderkant
    ctx.beginPath();
    ctx.fillStyle = BaseKleur;
    ctx.fillRect(250, 570, 700, 150);
    ctx.fill();
    ctx.closePath();
  }
}

class voorPilaar {
  constructor() {
    this.VoorKleurPaal;
    this.VoorKleurStandje;
  }
  tekenPilaar(ctx) {
    //pilaar 2
    ctx.beginPath();
    ctx.fillStyle = VoorKleurPaal;
    ctx.fillRect(925, 250, Bpilaar, 700);
    ctx.fill();
    ctx.closePath();

    //standje 2
    ctx.beginPath();
    ctx.fillStyle = VoorKleurStandje;
    ctx.moveTo(875, 350);
    ctx.lineTo(1050, 350);
    ctx.lineTo(1000, 400);
    ctx.lineTo(925, 400);
    ctx.fill();
    ctx.closePath();

    //pilaar 1
    ctx.beginPath();
    ctx.fillStyle = VoorKleurPaal;
    ctx.fillRect(200, 250, Bpilaar, 700);
    ctx.fill();
    ctx.closePath();

    //standje 1
    ctx.beginPath();
    ctx.fillStyle = VoorKleurStandje;
    ctx.moveTo(150, 350);
    ctx.lineTo(325, 350);
    ctx.lineTo(275, 400);
    ctx.lineTo(200, 400);
    ctx.fill();
    ctx.closePath();
  }
}
class Apilaar {
  constructor() {
    this.AchterKleurPaal;
  }
  tekenAchterPilaar(ctx) {
    //pilaar 3
    ctx.beginPath();
    ctx.fillStyle = AchterKleurPaal;
    ctx.fillRect(700, 300, Bpilaar, Hpilaar);
    ctx.fill();
    ctx.closePath();

    //standje 3
    ctx.beginPath();
    ctx.fillStyle = ActerStandje;
    ctx.moveTo(650, 400);
    ctx.lineTo(825, 400);
    ctx.lineTo(775, 450);
    ctx.lineTo(700, 450);
    ctx.fill();
    ctx.closePath();

    //pilaar 4
    ctx.beginPath();
    ctx.fillStyle = AchterKleurPaal;
    ctx.fillRect(425, 300, Bpilaar, Hpilaar);
    ctx.fill();
    ctx.closePath();

    //standje 4
    ctx.beginPath();
    ctx.fillStyle = ActerStandje;
    ctx.moveTo(375, 400);
    ctx.lineTo(500, 400);
    ctx.lineTo(450, 450);
    ctx.lineTo(425, 450);
    ctx.fill();
    ctx.closePath();
  }
}

class Berg2 {
  constructor() {
    this.bergVoor1;
    this.bergAchter1;
    this.bergVoor2;
    this.bergAchter2;
  }
  tekenBerg(ctx) {
    //Voorkant1
    ctx.beginPath();
    ctx.fillStyle = bergVoor1;
    ctx.moveTo(200, 200);
    ctx.lineTo(800, 800);
    ctx.lineTo(-400, 800);
    ctx.fill();
    ctx.closePath();

    //Achterkant1
    ctx.beginPath();
    ctx.fillStyle = bergAchter1;
    ctx.moveTo(200, 200);
    ctx.lineTo(1200, 800);
    ctx.lineTo(700, 800);
    ctx.fill();
    ctx.closePath();

    //Voorkant2
    ctx.beginPath();
    ctx.fillStyle = bergVoor2;
    ctx.moveTo(800, 100);
    ctx.lineTo(1700, 800);
    ctx.lineTo(200, 800);
    ctx.fill();
    ctx.closePath();

    //Achterkant2
    ctx.beginPath();
    ctx.fillStyle = bergAchter2;
    ctx.moveTo(800, 100);
    ctx.lineTo(1300, 800);
    ctx.lineTo(200, 800);
    ctx.fill();
    ctx.closePath();
  }
}

class Bovenkantpilaar {
  constructor() {
    this.VoorKleurPaal;
    this.AchterKleurPaal;
  }
  tekenBoven(ctx) {
    //voor1
    ctx.beginPath();
    ctx.arc(237.5, 250, 38, Math.PI, 2 * Math.PI);
    ctx.fillStyle = VoorKleurPaal;
    ctx.fill();

    //achter1
    ctx.beginPath();
    ctx.arc(462.5, 300, 38, Math.PI, 2 * Math.PI);
    ctx.fillStyle = AchterKleurPaal;
    ctx.fill();

    //achter2
    ctx.beginPath();
    ctx.arc(737.5, 300, 38, Math.PI, 2 * Math.PI);
    ctx.fillStyle = AchterKleurPaal;
    ctx.fill();

    //voor2
    ctx.beginPath();
    ctx.arc(962.5, 250, 38, Math.PI, 2 * Math.PI);
    ctx.fillStyle = VoorKleurPaal;
    ctx.fill();
  }
}

class deur {
  constructor() {
    this.deurKleur;
    this.blokKleur;
  }
  tekenDeur(ctx) {
    //Vierkant deur
    ctx.beginPath();
    ctx.fillStyle = deurKleur;
    ctx.fillRect(535, 650, 125, 150);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = blokKleur;
    ctx.fillRect(548, 650, 100, 150);
    ctx.fill();
    ctx.closePath();

    //Bovekant van deur
    ctx.beginPath();
    ctx.arc(597.5, 650, 62, Math.PI, 2 * Math.PI);
    ctx.fillStyle = "#D97D0D";
    ctx.fill();
    
        //deur binnen
        ctx.beginPath();
        ctx.arc(597.5, 650, 50, Math.PI, 2 * Math.PI);
        ctx.fillStyle = blokKleur;
        ctx.fill();
  }
}

class raam {
  constructor() {
    this.achterRaamKleur;
    this.achterRaamGrote;
  }
  tekenRaam(ctx) {
    //raam 1
    ctx.beginPath();
    ctx.fillStyle = achterRaamKleur;
    ctx.fillRect(300, 650, 100, 130);
    ctx.fill();
    ctx.closePath();

    //Bovekant van raam 1
    ctx.beginPath();
    ctx.arc(350, 650, achterRaamGrote, Math.PI, 2 * Math.PI);
    ctx.fillStyle = achterRaamKleur;
    ctx.fill();

    //raam 2
    ctx.beginPath();
    ctx.fillStyle = achterRaamKleur;
    ctx.fillRect(420, 650, 100, 130);
    ctx.fill();
    ctx.closePath();

    //Bovekant van raam 2
    ctx.beginPath();
    ctx.arc(845, 650, achterRaamGrote, Math.PI, 2 * Math.PI);
    ctx.fillStyle = achterRaamKleur;
    ctx.fill();

    //raam 3
    ctx.beginPath();
    ctx.fillStyle = achterRaamKleur;
    ctx.fillRect(675, 650, 100, 130);
    ctx.fill();
    ctx.closePath();

    //Bovekant van raam 3
    ctx.beginPath();
    ctx.arc(470, 650, achterRaamGrote, Math.PI, 2 * Math.PI);
    ctx.fillStyle = achterRaamKleur;
    ctx.fill();

    //raam 4
    ctx.beginPath();
    ctx.fillStyle = achterRaamKleur;
    ctx.fillRect(795, 650, 100, 130);
    ctx.fill();
    ctx.closePath();

    //Bovekant van raam 4
    ctx.beginPath();
    ctx.arc(725, 650, achterRaamGrote, Math.PI, 2 * Math.PI);
    ctx.fillStyle = achterRaamKleur;
    ctx.fill();
  }
}

class voorRaam {
  constructor() {
    this.voorRaamKleur;
    this.voorRaamGrote;
  }
  tekenVoorRaam(ctx) {
    //raam 1
    ctx.beginPath();
    ctx.fillStyle = voorRaamKleur;
    ctx.fillRect(310, 640, 80, 130);
    ctx.fill();
    ctx.closePath();

    //Bovekant van raam 1
    ctx.beginPath();
    ctx.arc(350, 650, voorRaamGrote, Math.PI, 2 * Math.PI);
    ctx.fillStyle = voorRaamKleur;
    ctx.fill();

    //raam 2
    ctx.beginPath();
    ctx.fillStyle = voorRaamKleur;
    ctx.fillRect(430, 640, 80, 130);
    ctx.fill();
    ctx.closePath();

    //Bovekant van raam 3
    ctx.beginPath();
    ctx.arc(470, 650, voorRaamGrote, Math.PI, 2 * Math.PI);
    ctx.fillStyle = voorRaamKleur;
    ctx.fill();

    //raam 3
    ctx.beginPath();
    ctx.fillStyle = voorRaamKleur;
    ctx.fillRect(685, 640, 80, 130);
    ctx.fill();
    ctx.closePath();

    //Bovekant van raam 3
    ctx.beginPath();
    ctx.arc(725, 650, voorRaamGrote, Math.PI, 2 * Math.PI);
    ctx.fillStyle = voorRaamKleur;
    ctx.fill();

    //raam 4
    ctx.beginPath();
    ctx.fillStyle = voorRaamKleur;
    ctx.fillRect(805, 640, 80, 130);
    ctx.fill();
    ctx.closePath();

    //Bovekant van raam 4
    ctx.beginPath();
    ctx.arc(845, 650, voorRaamGrote, Math.PI, 2 * Math.PI);
    ctx.fillStyle = voorRaamKleur;
    ctx.fill();
  }
}


let zon = new zon1();
zon.tekenZon(ctx);

let bergen = new Berg2();
bergen.tekenBerg(ctx);

let pilaarA = new Apilaar();
pilaarA.tekenAchterPilaar(ctx);

let bovenkant = new Bovenkantpilaar();
bovenkant.tekenBoven(ctx);

let base = new moskeebase();
base.tekenBase(ctx);

let pilaarV = new voorPilaar();
pilaarV.tekenPilaar(ctx);

let deuren = new deur();
deuren.tekenDeur(ctx);

let raamen = new raam();
raamen.tekenRaam(ctx);

let voorRaamen = new voorRaam();
voorRaamen.tekenVoorRaam(ctx);


