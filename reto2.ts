import {Mobile} from "./reto1"

let Nokia3210 = new Mobile("Nokia","3210","Nokia Networks",10,"Blue",false,0,50);
let iPhone3G = new Mobile("IPhone3g","3G","Apple",128,"Silver",true,3,600);
let samsungGalaxy10 = new Mobile("Samsung Galaxy 10","Galaxy 10","Samsung",260,"Negro",true,3,900);

console.log(Nokia3210);

Nokia3210.setNokia(true,4);
console.log(Nokia3210);



