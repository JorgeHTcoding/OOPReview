import { Mobile } from "./reto1"

let Nokia3210 = new Mobile("Nokia","3210","Nokia Networks",10,"Blue",false,0,50);
let iPhone3G = new Mobile("IPhone3g","3G","Apple",128,"Silver",true,3,600);
let samsungGalaxy10 = new Mobile("Samsung Galaxy 10","Galaxy 10","Samsung",260,"Negro",true,3,900);
let arrayObjetos = [Nokia3210,iPhone3G,samsungGalaxy10]

// console.log(Nokia3210);
// console.log(iPhone3G);
// console.log(samsungGalaxy10);

Nokia3210.setNokia(true,4);

// console.log(Nokia3210);
// console.log(iPhone3G);
// console.log(samsungGalaxy10);

function atributosArray(arrayObjetos){
for(let i = 0; i < arrayObjetos.length; i++){
   arrayObjetos[i].caracteristicas()
    } return this
}
 
atributosArray(arrayObjetos)

