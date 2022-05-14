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
    this.totalPrice;

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

public totalPriceCalculation(mobiles:Mobile[]):number{    
     let precio:number = 0;    
    for(let i = 0; i < mobiles.length; i++ ){    
        precio +=  mobiles[i].getPrice()
        } return precio
 } 
}