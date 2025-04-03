var canvas_tres = document.getElementById('lienzo-tres');
if(canvas_tres.getContext){
    console.log("Sí se soporta la propiedad getContext");

    var ctx_3 = canvas_tres.getContext("2d");

    ctx_3.fillStyle = "rgb(200, 0, 0)"; // Color rojo sólido
    ctx_3.fillRect(10, 10, 55, 50);

    ctx_3.fillStyle = "rgba(0, 0, 200, 0.5)"; // Color azul semitransparente
    ctx_3.fillRect(30, 30, 55, 50);

    ctx_3.fillStyle = "rgba(0, 200, 0, 0.5)"; // Color verde semitransparente
    ctx_3.fillRect(50, 50, 55, 50);
} else {
    console.log("No se soporta la propiedad getContext");
}

var canvas_cuatro = document.getElementById('lienzo-cuatro');
if(canvas_cuatro.getContext){
    console.log("Sí se soporta la propiedad getContext");

    var ctx_4 = canvas_cuatro.getContext("2d");

    ctx_4.beginPath();
    ctx_4.moveTo(5, 5);
    ctx_4.lineTo(145, 145);
    ctx_4.strokeStyle = "rgb(255, 255, 255)";
    ctx_4.lineWidth = 2;
    ctx_4.stroke();
} else {
    console.log("No se soporta la propiedad getContext");
}

var canvas_cinco = document.getElementById('lienzo-cinco');
if(canvas_cinco.getContext){
    console.log("Sí se soporta la propiedad getContext");

    var ctx_5 = canvas_cinco.getContext("2d");

    // Línea punteada horizontal
    ctx_5.beginPath();
    ctx_5.setLineDash([5, 15]);
    ctx_5.moveTo(0, 40);
    ctx_5.lineTo(150, 40);
    ctx_5.strokeStyle = "rgb(255, 255, 255)";
    ctx_5.lineWidth = 2;
    ctx_5.stroke();

    // Línea continua diagonal
    ctx_5.beginPath();
    ctx_5.setLineDash([]); // Línea continua
    ctx_5.moveTo(0, 40);
    ctx_5.lineTo(150, 120);
    ctx_5.strokeStyle = "rgb(255, 255, 255)";
    ctx_5.lineWidth = 2;
    ctx_5.stroke();
} else {
    console.log("No se soporta la propiedad getContext");
}

var canvas_uno = document.getElementById('lienzo-uno');
if(canvas_uno.getContext){
    var ctx_1 = canvas_uno.getContext("2d");
    ctx_1.beginPath();
    ctx_1.arc(75, 75, 50, 0, Math.PI * 2);
    ctx_1.strokeStyle = "lime";
    ctx_1.lineWidth = 3;
    ctx_1.stroke();
}

var canvas_dos = document.getElementById('lienzo-dos');
if(canvas_dos.getContext){
    var ctx_2 = canvas_dos.getContext("2d");
    ctx_2.beginPath();
    ctx_2.moveTo(75, 25);
    ctx_2.lineTo(25, 125);
    ctx_2.lineTo(125, 125);
    ctx_2.closePath();
    ctx_2.strokeStyle = "#ff3131";
    ctx_2.lineWidth = 3;
    ctx_2.stroke();
}

var canvas_seis = document.getElementById('lienzo-seis');
if(canvas_seis.getContext){
    var ctx_6 = canvas_seis.getContext("2d");
    ctx_6.beginPath();
    ctx_6.moveTo(75, 10);
    ctx_6.lineTo(90, 50);
    ctx_6.lineTo(130, 50);
    ctx_6.lineTo(100, 80);
    ctx_6.lineTo(110, 120);
    ctx_6.lineTo(75, 100);
    ctx_6.lineTo(40, 120);
    ctx_6.lineTo(50, 80);
    ctx_6.lineTo(20, 50);
    ctx_6.lineTo(60, 50);
    ctx_6.closePath();
    ctx_6.strokeStyle = "#F000FF";
    ctx_6.lineWidth = 2;
    ctx_6.stroke();
}