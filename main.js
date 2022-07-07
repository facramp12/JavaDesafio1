const listadoNotas = [5, 7, 3];

const posicion = 1;

listadoNotas[2]; //3
listadoNotas[0]; //5
listadoNotas[posicion]; // 7

let contadorDeNotas = 0;

for(let posicion = 0; posicion < 3; posicion++){
    promedioDeNotas = promedioDeNotas + listadoNotas[posicion];
    // promedioDeNotas += listadoNotas[posicion]; 
}
const promedio = sumadorDeNotas/3;
console.log(promedio); 

if(promedio < 6){
    console.log("estas aprobado!! :)")
}else{
    console.log("no aprobaste :, te sacaste un: " + promedio)
}
// for(let i = 0; i < 3; i++){
//    contadorDeNotas = listadoNotas[i];{}

const ligaDeMiEquipo = prompt("Club de barrio");

switch(ligaDeMiEquipo){
    case "A":
        console.log("sos de la A, Felicitaciones crack!");
        break;
    case "B Nacional":
        console.log("te falta crack");
    case "B metro": 
        console.log("juegan medio pelo pero le ponen huevo");
    default:
        console.log("No te conoce nadie")
        break;
}