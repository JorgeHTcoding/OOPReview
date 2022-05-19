export class Punto {
    private x:number;
    private y:number;

    constructor(x,y){

     this.x = x;
     this.y = y;

     
    }

        public toString():string{
            let xString = this.x.toString();
            let yString = this.y.toString();

            return "(" + xString + "," + yString + ")";

        }

        public setX(x:number):void{
            this.x = x;
        }

        public getX():number{
            return this.x;
        }
        public setY(y:number):void{
            this.y = y;
        }

        public getY():number{
            return this.y;
        }

        public distanciaAlOrigen():number{
            return Math.sqrt((Math.pow((this.x - 0),2)) + (Math.pow((this.y -0),2)))
            
        }

        public calcularDistancia(otroPunto:Punto):number{
            
            return Math.sqrt((Math.pow((this.x - otroPunto.x),2)) + (Math.pow((this.y - otroPunto.y),2)))
        }

        public calcularCuadrante():number{
            
              if(this.x == 0 || this.y == 0){
                return 0
            } if(this.x > 0 && this.y > 0){
                return 1
            } if(this.x < 0 && this.y > 0){
                return 2
            } if(this.x < 0 && this.y < 0){
                return 3
            } if(this.x > 0 && this.y < 0)
                return 4          
            }
        
      public calcularMasCercano(puntos:Punto[]):Punto{

            //distancia minima al punto más cercano
           
           let puntoCercano;
           let distanciaMin = Number.MAX_VALUE;

            for(let i = 0; i < puntos.length; i++){
              //como empieza en 1 almazenamos la posición 0 en una variable y hacemos que primero nos la comprueba y después siga con el resto
                if(this.calcularDistancia(puntos[i]) < distanciaMin){                
                distanciaMin = this.calcularDistancia(puntos[i])  
                puntoCercano = puntos[i]     
                                
                 } 

            }
            return puntoCercano       
        }   
}
           
            }
            }
