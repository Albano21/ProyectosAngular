export class Elemento{

    constructor(public descripcion:string, public valor:number, public tipo:string, public porcentaje:number){
        if(this.tipo == "egr"){
            this.valor *= -1
        }
        
    }

    setPorcentaje(p:number){
        this.porcentaje = p;
    }

    compareTo(){
        
    }
}