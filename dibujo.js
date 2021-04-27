
var texto = document.getElementById("cash");
var buscar= document.getElementById("boton");
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

buscar.addEventListener("click",contar);
var a = d.width;
console.log(a);
  //alert(a);


function contar()
 {
        var x =parseInt( texto.value) ;
        console.log(x);
       var numeroLi =(a/x);
       var numeriLi2=(a/x);

       for(var i=0 ; i<= a ;i=i+1 )
             {
               Dibulinea("#76B799",0,i*numeroLi,i*numeroLi,a);

               Dibulinea("#D4562A ",0,a-i*numeroLi,i*numeroLi,0);

               Dibulinea("#798DCB",a,i*numeroLi,a-i*numeroLi,a);
               Dibulinea("#8A222A ",a-i*numeroLi,0,a,a-i*numeroLi);
             }
    }



function Dibulinea(color,x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle =color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final , y_final);
  lienzo.stroke();
  lienzo.closePath();
}
