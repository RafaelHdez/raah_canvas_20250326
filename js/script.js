var canvas_tres = document.getElementById('lienzo-tres');
var canvas_cuatro = document.getElementById('lienzo-cuatro');
var canvas_cinco = document.getElementById('lienzo-cinco');

if(canvas_tres.getContext){
    console.log("Sí se soporta la propiedad getContext");

    var ctx_3 = canvas_tres.getContext("2d");

    ctx_3.fillStyle = "#rgb(200, 0, 0)"; //Crear un objeto con un color de fondo
    ctx_3.fillRect(10, 10, 55, 50); //Dibujar el objeto en la posición X=10, Y=10, con un ancho de 55 y un alto de 50

    ctx_3.fillStyle = "#rgba(0, 0, 200, 0.5)"; //Crear un objeto con un color de fondo
    ctx_3.fillRect(30, 30, 55, 50); //Dibujar el objeto en la posición X=10, Y=10, con un ancho de 55 y un alto de 50

    ctx_3.fillStyle = "#rgba(0, 200, 0, 0.5)"; //Crear un objeto con un color de fondo
    ctx_3.fillRect(50, 50, 55, 50); //Dibujar el objeto en la posición X=10, Y=10, con un ancho de 55 y un alto de 50
}
else {
    console.log("No se soporta la propiedad getContext");
}

if(canvas_cuatro.getContext){
    console.log("Sí se soporta la propiedad getContext");

    var ctx_4 = canvas_cuatro.getContext("2d");

    ctx_4.beginPath(); //Iniciar un trazo
    ctx_4.moveTo(5, 5); //Mover el trazo a la posición X=75, Y=50
    ctx_4.lineTo(125, 125); //Dibujar una línea hacia la posición X=75, Y=50
    ctx_4.strokeStyle = "#rgb(255, 255, 255)"; //Establecer el color de la línea
    ctx_4.stroke(); //Dibujar la línea
}
else {
    console.log("No se soporta la propiedad getContext");
}

if(canvas_cinco.getContext){
    console.log("Sí se soporta la propiedad getContext");

    var ctx_5 = canvas_cinco.getContext("2d");

    ctx_5.beginPath(); //Iniciar un trazo
    ctx_3.setLineDash([5, 15]); //Establecer el trazo de la línea punteada con 15 pixeles dibujados y 5 pixeles sin dibujar
    ctx_5.moveTo(0, 40); //Mover el trazo a la posición X=0, Y=40
    ctx_5.lineTo(150, 40); //Mover el trazo a la posición X=150, y=40
    ctx_5.strokeStyle = "#rgb(255, 255, 255)"; //Establecer el color de la línea
    ctx_5.stroke(); //Dibujar la línea con el trazo de la línea punteada

    ctx_5.beginPath(); //Iniciar un trazo
    ctx_3.setLineDash([]); //Establecer una linea continua
    ctx_5.moveTo(0, 40); //Mover el trazo a la posición X=0, Y=40
    ctx_5.lineTo(150, 120); //Mover el trazo a la posición X=150, y=40
    ctx_5.strokeStyle = "#rgb(255, 255, 255)"; //Establecer el color de la línea
    ctx_5.stroke(); //Dibujar la línea con el trazo de la línea punteada
}
else {
    console.log("No se soporta la propiedad getContext");
}