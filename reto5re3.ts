import { Mobile } from "./reto1";
import { MobileLibrary } from "./reto1re3";

let Nokia3210 = new Mobile("Nokia","3210","Nokia Networks",10,"Blue",false,0,50);
let iPhone3G = new Mobile("IPhone3g","3G","Apple",128,"Silver",true,3,600);
let samsungGalaxy10 = new Mobile("Samsung Galaxy 10","Galaxy 10","Samsung",260,"Negro",true,3,900);
let huaweiP50pro = new Mobile("Huawei P50 pro","P50 pro","Huawei",182,"Dorado",true,4,850);

let arrayMobiles = [Nokia3210,iPhone3G,samsungGalaxy10,huaweiP50pro];



let libreriaMobile = new MobileLibrary("Liberia Móviles" , "El Patio de mi Casa" , arrayMobiles)




libreriaMobile.setLocation("Uzbekiztan")
libreriaMobile.setName("Liberia Dromedarios de competición")
libreriaMobile.setMobiles([iPhone3G,samsungGalaxy10,huaweiP50pro,Nokia3210])
console.log(libreriaMobile);




