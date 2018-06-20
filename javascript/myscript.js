var canvas=document.getElementById("canvas1");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var allcontext=canvas.getContext("2d");
//var rect1=allcontext.fillRect(x,y,width,height);
// allcontext.fillStyle="#fff5a3";
// allcontext.fillRect(100,100,100,100);
// allcontext.fillStyle="#66f5aa";
// allcontext.fillRect(300,100,100,100);
// allcontext.fillStyle="#00f5aa";
// allcontext.font = "30px Arial";
// allcontext.fillText("fdfdf",100,100);
// allcontext.fillRect(500,100,100,100);
//
// //draw a line
// allcontext.beginPath();
// allcontext.moveTo(100,300);
// allcontext.lineTo(300,50);
// allcontext.lineTo(300,200);
// allcontext.lineTo(100,300);
// allcontext.strokeStyle="#ffffff";
// allcontext.stroke();
//
// //draw a circle
//
// allcontext.beginPath();
// // allcontext.arc(x,y,radious,startangle(0), endangle(2*PI), rotationdirection);
// allcontext.arc(300,300,50,0,2*Math.PI);
// allcontext.strokeStyle="#ffffff";
// allcontext.stroke();
//
// //draw multiple arc using for loop
// var x=400;
// var y=300;
// var widdowsize=window.innerWidth-50;
// for (var i=0;i<20;i++){
//     allcontext.beginPath();
//     allcontext.arc(x,y,30,0,2*Math.PI);
//     allcontext.strokeStyle="#ffffff";
//     allcontext.stroke();
//     x+=120;
//     if(x>=widdowsize)
//     {
//         y+=150;
//         x=400;
//     }
// }


function rectangle(x,y,height,width,col,thickness) {
    allcontext.beginPath();
    allcontext.moveTo(x,y);
    allcontext.lineTo(x+width,y);
    allcontext.lineTo(x+width,y+height);
    allcontext.lineTo(x,y+height);
    allcontext.lineTo(x,y);
    allcontext.strokeStyle=col;
    allcontext.lineWidth=thickness;
    allcontext.stroke();
}

function arc(x,y,radious,startangle, endangle,circumcolor,areaColor, circumThicness, rotationdirection)
{
    allcontext.arc(x,y,radious,startangle,endangle,rotationdirection);
    allcontext.fillStyle=areaColor;
    allcontext.lineWidth=circumThicness;
    allcontext.strokeStyle=circumcolor;
    allcontext.fill();
    allcontext.stroke();
}
arc(100,400,30,0,2*Math.PI,"green","red",5);
arc(200,400,50,0,Math.PI,"green","red",5,true);
arc(400,400,100,0,2*Math.PI,"green","red",5);
// rectangle(100,100,100,100,"#ffaa55",10);
// rectangle(200,200,100,150,"#ffaa55",10);