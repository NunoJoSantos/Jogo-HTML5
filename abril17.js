/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//Canvas para Rectangulo
var c = document.getElementById("cvsRectangulo");
var ctx = c.getContext("2d");
ctx.fillStyle = "#000000";
ctx.strokeRect(30,20,160,80);

//Canvas para Circulo
var canvas = document.getElementById("cvsCirculo");
var ctx2 = canvas.getContext("2d");
ctx2.beginPath();
ctx2.arc(95,50,40,0,2*Math.PI);
ctx2.stroke();

//Canvas para Triangulo
var canvTri = document.getElementById("cvsTriangulo");
var ctx3 = canvTri.getContext("2d");
ctx3.beginPath();
ctx3.moveTo(90,15);
ctx3.lineTo(30,120);
ctx3.lineTo(150,120);
ctx3.closePath();
ctx3.stroke();


//Canvas para Paralelepido
var canvPara = document.getElementById("cvsParalel");
var ctx71 = canvPara.getContext("2d");
ctx71.strokeRect(20,60,120,60);
ctx71.strokeRect(60,40,120,60);
ctx71.beginPath();
ctx71.moveTo(20,60);
ctx71.lineTo(60,40);
ctx71.moveTo(140,60);
ctx71.lineTo(180,40);
ctx71.moveTo(20,120);
ctx71.lineTo(60,100);
ctx71.moveTo(140,120);
ctx71.lineTo(180,100);
ctx71.stroke();
ctx71.closePath();


//Canvas para Piramide
var canvPiram = document.getElementById("cvsPiramide");
var ctx6 = canvPiram.getContext("2d");
ctx6.beginPath();
ctx6.moveTo(70,20);
ctx6.lineTo(20,120);
ctx6.lineTo(60,80);
ctx6.lineTo(70,20);
ctx6.lineTo(140,80);
ctx6.lineTo(60,80);
ctx6.moveTo(20,120);
ctx6.lineTo(120,120);
ctx6.lineTo(70,20);
ctx6.moveTo(120,120);
ctx6.lineTo(140,80);
ctx6.closePath();
ctx6.stroke();


//Canvas para Quadrado
var canvQuad = document.getElementById("cvsQuadrado");
var ctx5 = canvQuad.getContext("2d");
ctx5.fillStyle = "#000000";
ctx5.strokeRect(80,20,100,100);


//Canvas para Cilindro
var canvCil = document.getElementById("cvsCilindro");
var ctxcil = canvCil.getContext("2d");
ctxcil.beginPath();
ctxcil.ellipse(120, 30, 50, 10, 0, 0, 2 * Math.PI);
ctxcil.ellipse(120, 120, 50, 10, 0, 0, 2 * Math.PI);
ctxcil.moveTo(70, 30);
ctxcil.lineTo(70, 120);
ctx6.closePath();
ctxcil.stroke();
/*
ctxcil.save();
//ctxcil.translate(canvCil.width/2, canvCil.height/2);
ctxcil.scale(2, 0.5);
ctxcil.beginPath();
ctxcil.arc(60, 30, 25, 0, 2*Math.PI);
ctxcil.stroke();
ctxcil.restore();
ctxcil.save();
//ctxcil.translate(canvCil.width/2, canvCil.height/2);
ctxcil.scale(2, 0.5);
ctxcil.beginPath();
ctxcil.arc(60, 140, 25, 0, 2*Math.PI);
ctxcil.stroke();
ctxcil.restore();
ctxcil.moveTo(70, 15);
ctxcil.lineTo(20, 120);
ctxcil.stroke();
*/

function certaErrada(){
    var radio = document.getElementsByName("figGeo");
    for(var i=0; i < radio.length; i++){
        if( radio[i].checked){
            if( radio[i].className === "opcerta"){
                radio[i].parentNode.style.color= 'green';
                //alert('certo');
            }
            else{
                radio[i].parentNode.style.color = 'red';
                //alert("errado");
            }
        }        
    }
}



function calcPontos(){
    var pontuacao = 0;
    var radio = document.getElementsByName("figGeo");
    for(var i=0; i < radio.length; i++){
        if( radio[i].checked){
            pontuacao = pontuacao + parseInt(radio[i].value);
        }
        
    }
    certaErrada();
    alert("Obteve "+ pontuacao+" pontos.");
}

