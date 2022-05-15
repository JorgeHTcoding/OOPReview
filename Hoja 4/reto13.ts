import { Punto } from "./reto1";

export class Triangulo{

    private puntoA:Punto;
    private puntoB:Punto;
    private puntoC:Punto;

    constructor(puntoA:Punto,puntoB:Punto,puntoC:Punto){

        this.puntoA = puntoA;
        this.puntoB = puntoB;
        this.puntoC = puntoC;
    }
    
    public calcularLongitudLados():number[]{

        let resultadoLongitud = [];
       
        let distanciaAB = this.puntoA.calcularDistancia(this.puntoB);
        let distaciaAC = this.puntoA.calcularDistancia(this.puntoC);
        let distanciaBC = this.puntoB.calcularDistancia(this.puntoC);

        return resultadoLongitud = [distaciaAC,distanciaAB,distanciaBC]       
            
    }

}