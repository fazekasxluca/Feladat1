
//parosKivalogat fgv

function parosKivalogat(szamok:number[]):number[]
{

    var parosSZ:number[] = []; 

    for(var i:number = 0; i < szamok.length;i++)
    { 
        if(szamok[i] % 2 === 0)
        {
            parosSZ.push(szamok[i]);
            
        }

    }
    
    return parosSZ;
}

var szamokTomb:number[] = [3,2,5,7,8]
console.log(parosKivalogat(szamokTomb));

interface Dolgozo{

    nev:string,
    kor:number,
    aktiv:boolean
}
var d1:Dolgozo = {nev: "kiss lajos",kor:23,aktiv:false};

/*
Keszits interface-t amivel Laptopokat lehet tarolni
 -cikkszam
 -gyarto
 -ar
 -keszleten
 
 
 Keszits 3db laptop objektumot egy laptop tipusu tombbe
*/


interface Laptop{

    cikkszam:string,
    gyarto:string,
    ar:number,
    keszleten:boolean
}

var laptop1:Laptop = {cikkszam:"asd123",gyarto:"dell",ar: 500,keszleten:true};
var laptop2:Laptop = {cikkszam:"qwe345",gyarto:"hp",ar: 500,keszleten:true};
var laptop3:Laptop = {cikkszam:"wer34534",gyarto:"fjutisu",ar: 500,keszleten:false};

var tombLaptopok:Laptop[]  = [laptop1,laptop2,laptop3];

/*
Add meg fgv-vel a keszleten levo laptopok atlagarat
 
*/

function LaptopAtlagAr(tomb:Laptop[]):number
{
    var atlag = 0;
    var db = 0;

    for(var i:number = 0; i < tomb.length;i++)
    {
        if(tomb[i].keszleten)
        {
            atlag = atlag + tomb[i].ar;
            db++;
        }
    }
     atlag /= db;

    return atlag;
}

console.log(LaptopAtlagAr(tombLaptopok));

/*
-Keszites interface-t BevasarlolistaTetel neven
 -megnevezes
 -ar
 -datum
 .fontossan {num fontos, normal fontos}

 -Keszits urlapot amin bev.lista teleket lehet felvinni
 -A felvitt ertekekbol keszits bev.lista tetel objektumot
 -Az objektumoat jelentsd meg egy bootstrap-es tablaban
*/

/*
Irj egy fgv-t ami egy szam tombbol vissza adj a legkisebb szamot.
*/

function legKisebbSzam(tomb:number[]):number
{
    var legkisebb:number = tomb[0];

    for(var i:number = 0; i < tomb.length; i++)
    {
        if(legkisebb > tomb[i])
        {
            legkisebb = tomb[i];
        }
        
     }

    return legkisebb;
}

/*
Keszits fgv-t , ami egy szam tombbol kivalogatja a paros szamokat
*/

function parosKivalogat(tomb:number[]):number[]
{
    var parosSzamok:number[] = [];

    for(var i:number = 0; i < tomb.length; i++)
    {
        if(tomb[i] % 2 == 0)
        {
         parosSzamok.push(tomb[i]);
        }
    }

    return parosSzamok;
}

var szamok = [3,4,1,61,2,12,24];
console.log(legKisebbSzam(szamok));
console.log(parosKivalogat(szamok));

enum Fontossag{
    nem_fontos,
    normal,
    fontos
}

interface BevasarlolistaTetel{
    megnevezes:string,
    ar:number,
    datum:string,
    fontossag:Fontossag;
}

document.getElementById("felvitel")?.addEventListener("click",function()
{

  var megnevezes_ = (document.getElementById("megnevezes")  as HTMLInputElement).value; 
  var ar_ = Number((document.getElementById("ar")  as HTMLInputElement).value); 
  var datum_ = (document.getElementById("datum")  as HTMLInputElement).value; 
  var fontossagok_ = (document.getElementById("fontossagok")  as HTMLInputElement).value; 

  var fontossagok:Fontossag = Fontossag.fontos;
  var aktFontossagSzoveg:string = "";
  switch(fontossagok_)
  {
    case "nem_fontos":
        fontossagok = Fontossag.nem_fontos;
        aktFontossagSzoveg = "Nem fontos";
        break;

     case "normal":
        fontossagok = Fontossag.normal;
        aktFontossagSzoveg = "normal";
        break;

    case "normal":
        fontossagok = Fontossag.fontos;
        aktFontossagSzoveg = "fontos";
         break;   
    default:
        fontossagok = Fontossag.fontos;
        aktFontossagSzoveg = "fontos"; 
        break;  
  }
 
  var bevLista1:BevasarlolistaTetel = {megnevezes: megnevezes_,ar:ar_,datum:datum_,fontossag:fontossagok};

  console.log(bevLista1);

  var body =  document.getElementById("body");


  var tr = document.createElement("tr");

  var td1 =  document.createElement("td");
  var td2 =  document.createElement("td");
  var td3 =  document.createElement("td");
  var td4 =  document.createElement("td");

  var bevListaAr =  bevLista1.ar.toString();


  td1.appendChild(document.createTextNode(bevLista1.megnevezes));
  td2.appendChild(document.createTextNode(bevListaAr));
  td3.appendChild(document.createTextNode(bevLista1.datum));
  td4.appendChild(document.createTextNode(aktFontossagSzoveg));

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  body?.appendChild(tr);
})