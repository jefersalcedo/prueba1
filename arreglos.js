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
    case 2:
        console.log("*");
        console.log("OPCION N°2-> ORDENA DE MAYOR A MENOR LOS NUMEROS ALEATORIOS GENERADOS");
        for (var i = 0; i < 20; i++) {
            Mayor_Menor[i] = EntRandom(1, 20);
        }
        console.log("VECTOR DE ALEATORIOS ↓");
        console.log(Mayor_Menor);
        for (var i = 0; i < 19; i++) {
            for (var j = 0; j < 19 - i; j++) {
                if (Mayor_Menor[j] < Mayor_Menor[j + 1]) {
                    var aux = Mayor_Menor[j];
                    Mayor_Menor[j] = Mayor_Menor[j + 1];
                    Mayor_Menor[j + 1] = aux;
                }
            }
        }
        console.log("VECTOR ORDENADO DE MAYOR A MENOR ↓");
        console.log(Mayor_Menor);
        break;
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
    case 4:
        console.log("*");
        console.log("OPCION N°4-> GENERA UN NUMERO ALEATORIO A BUSCAR E IMPRIME CUANTAS VECES ESTA EN EL VECTOR");
        for (var i = 0; i < 20; i++) {
            cuenta.push(EntRandom(1, 20));
        }
        var x = EntRandom(1, 20); //genera un numero aleatorio para buscar en el vector
        console.log("el valor a buscar en el vector es-> " + x);
        var contador = 0; //cuenta cuantas veces esta la X(numero aleatorio) en el vector
        for (var i = 0; i < cuenta.length; i++) {
            if (cuenta[i] == x) {
                contador++;
            }
        }
        console.log(cuenta);
        console.log("El número " + x + " aparece " + contador + " veces en el vector");
        break;
    default:
        console.log("no existe la opcion");
        break;
}
