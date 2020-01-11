
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var n =0 ;


function Dibulinea(color,x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle =color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final , y_final);
  lienzo.stroke();
  lienzo.closePath();
}

for(var i=0 ; i<=300;i++ )
{
    Dibulinea("#76B799",0,i*10,i*10,300);
    Dibulinea("#D4562A ",0,300-i*10,i*10,0);
    Dibulinea("#798DCB",300,i*10,300-i*10,300);
    Dibulinea("#8A222A ",300-i*10,0,300,300-i*10);
}

while(n<=14)
{
    n++;
    Dibulinea("#76B799",150, n*10,150- n*10,150);
    Dibulinea("#798DCB",150,n*10,150+n*10,150);
    Dibulinea("#8A222A ",150,300- n*10,150- n*10,150);
    Dibulinea("#D4562A ",150,300-n*10,150+n*10,150);
}
    Dibulinea("#76B799",299,1,299,299);
    Dibulinea("#D4562A ",1,1,299,1);
    Dibulinea("#76B799",1,299,299,299);
    Dibulinea("#2B0104  ",1,1,1,299);
    Dibulinea("black",150,1,150,299);
    Dibulinea("black ",1,150,299,150);
