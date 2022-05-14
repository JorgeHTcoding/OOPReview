import { Mobile } from "./reto1";



export class MobileLibrary {

    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

   constructor (name:string,location:string,mobiles:Mobile[]){

    this.name = name;
    this.location = location;
    this.mobiles = mobiles;
    this.totalPrice = this.totalPriceCalculation(mobiles);

}
 public setName(name:string):void{
     this.name = name;
 }

 public getName():string{
 return this.name

 } 
 public setLocation(location:string):void{
    this.location = location;

}
 public getLocation():string{
return this.location

} 
public setMobiles(mobiles:Mobile[]):void{
   this.mobiles = mobiles;

}
public getMobiles():Mobile[]{
return this.mobiles

}
 
public setTotalPrice(totalPrice:number):void{
   this.totalPrice = totalPrice;

}
public getTotalPrice():number{
return this.totalPrice
}

private totalPriceCalculation(mobiles:Mobile[]):number{    
     let precio:number = 0;    
    for(let i = 0; i < mobiles.length; i++ ){    
        precio +=  mobiles[i].getPrice()
        } return precio
 } 

 public printLibrary():void{
    
for(let i = 0; i < this.mobiles.length ; i++){
 console.log(
     this.mobiles[i].caracteristicas() 
     
 )
 }console.log('\uD83D\uDC04 ' + "..." + "\n" +
 '\uD83D\uDC04 ' + "Price Overall: " + this.totalPrice + "\n" )
}
}

         let Nokia3210 = new Mobile("Nokia","3210","Nokia Networks",10,"Blue",false,0,50);
         let iPhone3G = new Mobile("IPhone3g","3G","Apple",128,"Silver",true,3,600);
         let samsungGalaxy10 = new Mobile("Samsung Galaxy 10","Galaxy 10","Samsung",260,"Negro",true,3,900);
         let huaweiP50pro = new Mobile("Huawei P50 pro","P50 pro","Huawei",182,"Dorado",true,4,850);
         
         let arrayMobiles = [Nokia3210,iPhone3G,samsungGalaxy10,huaweiP50pro];

         let libreriaMobile = new MobileLibrary("Liberia Móviles" , "El Patio de mi Casa" , arrayMobiles)
         
         
         libreriaMobile.printLibrary()


