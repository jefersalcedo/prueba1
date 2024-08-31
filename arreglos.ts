function EntRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // esto es una semilla 
}

//TALLER VECTORES 
var valor = 1;
var Num_Aleatorios = [];
var Almacena = []; //arreglos primer punto(case 1)
var Mayor_Menor = []; //arreglo segundo punto(case 2)
var Busca_Mayor = []; //arreglo tercer punto(case 3)
var cuenta = []; //arreglo cuarto punto(case 4)
switch (valor) {
    case 3:
        console.log("*");
        console.log("OPCION N°3-> MUESTRA EL NUMERO MAYOR DEL VECTOR");
        for (var i = 0; i < 30; i++) {
            Busca_Mayor.push(EntRandom(1, 50));
        }
        var num_Mayor = Busca_Mayor[0]; //la variable num_mayor toma el valor del vector en la posicion 0
        for (var i = 1; i < Busca_Mayor.length; i++) {
            if (Busca_Mayor[i] > num_Mayor) {
                num_Mayor = Busca_Mayor[i];
            }
        }
        console.log("VECTOR DE ALEATORIOS ↓");
        console.log(Busca_Mayor);
        console.log("EL NUMERO MAYOR DEL VECTOR ES ↓");
        console.log(num_Mayor);
        break;
    case 1:
        console.log("*");
        console.log("OPCION N°1-> IMPRIME NUMEROS ALEATORIOS Y SEPARA EN OTRO VECTOR LOS NUMEROS PARES");
        for (var i = 0; i <= 30; i++) {
            Num_Aleatorios.push(EntRandom(1, 20));
            if (Num_Aleatorios[i] % 2 == 0) {
                var conteo = Num_Aleatorios[i];
                Almacena.push(conteo);
            }
        }
        console.log("VECTOR DE ALEATORIOS ↓");
        console.log(Num_Aleatorios);
        console.log("VECTOR DE PARES ↓");
        console.log(Almacena);
        break;
    
    default:
        console.log("no existe la opcion");
        break;
}