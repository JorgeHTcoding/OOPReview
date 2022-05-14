import { MobileLibrary } from "./reto1re3";

export class Mobile{
    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5g:boolean;
    private cameraNumber:number;
    private price:number;

    constructor(name:string,model:string,trademark:string,sdSize:number,color:string,is5g:boolean,cameraNumber:number,price:number){

     this.name = name;
     this.model = model;
     this.trademark = trademark;
     this.sdSize = sdSize;
     this.color = color;
     this.is5g = is5g;
     this.cameraNumber = cameraNumber;
     this.price = price;
     
     
         }
    public setName(name:string):void{
        this.name = name;
    }
    public getName():string{
        return this.name
    }
    public setModel(model:string):void{
        this.model = model;
    }
    public getModel():string{
        return this.model
    }
    public setTrademark(trademark:string):void{
        this.trademark = trademark;
    }
    public getTrademakr():string{
        return this.trademark
    }
    public setsdSize(sdSize:number):void{
        this.sdSize = sdSize
    }
    public getSdSize():number{
        return this.sdSize
    }
    public setColor(color:string):void{
        this.color = color;
    }
    public getColor():string{
        return this.color
    }
    public setis5g(is5g:boolean):void{
        this.is5g = is5g;
    }
    public getis5g():boolean{
        return this.is5g
    }
    public setCameraNumber(cameraNumber:number):void{
        this.cameraNumber = cameraNumber;
    }
    public getCameraNumber():number{
        return this.cameraNumber
    }
    public setPrice(price:number):void{
        this.price = price;
    }
    public getPrice():number{
        return this.price
    }


     public setNokia(is5g:boolean,camaraNumber:number):void{
            this.is5g = is5g;
            this.cameraNumber = camaraNumber;
     }
    
     public caracteristicas(){
                
            return "These are all my mobiles: " + "\n" + "\n" +
                        "The characteristics of the mobile "+ this.name + " are: " + "\n" + "\n"                          
            + '\uD83D\uDC04 ' + "Name: " + this.name + "\n"
            + '\uD83D\uDC04 ' + "Model: " + this.model + "\n"
            + '\uD83D\uDC04 ' + "Trademark: " + this.trademark + "\n"
            + '\uD83D\uDC04 ' + "SD Size (GB): " + this.sdSize + "\n"
            + '\uD83D\uDC04 ' + "Color: " + this.color + "\n"
            + '\uD83D\uDC04 ' + "Is 5g: " + this.is5g + "\n"
            + '\uD83D\uDC04 ' + "Number of Cameras: " + this.cameraNumber + "\n"
            
            

    }

    
         }

         
         