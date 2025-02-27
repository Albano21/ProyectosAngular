import { Injectable } from "@angular/core";
import { Elemento } from "./elemento.model";

@Injectable()
export class PresupuestoService{

    totalIngresos: number = 65000;
    totalEgresos: number = -1500;
    presupuesto: number = this.totalIngresos + this.totalEgresos;
    porcentajeTotalEgresos: number = Number((-this.totalEgresos*100/this.totalIngresos).toFixed(2))

    agregar(e:Elemento){
        if(e.tipo == "ing"){
            this.totalIngresos += e.valor
        }
        else{
            this.totalEgresos += e.valor
        }
        this.presupuesto = this.totalIngresos + this.totalEgresos;
        this.actualizarPorcentajeTotalEgreso()
    }

    eliminar(e:Elemento){
        if(e.tipo == "ing"){
            this.totalIngresos -= e.valor
        }
        else{
            this.totalEgresos -= e.valor
        }
        this.presupuesto = this.totalIngresos + this.totalEgresos;
        this.actualizarPorcentajeTotalEgreso();
    }

    calcularPorcentajeEgreso(n:number):number{
        return Number((n*100/this.totalIngresos).toFixed(2));
    }

    actualizarPorcentajeTotalEgreso(){
        this.porcentajeTotalEgresos = Number((-this.totalEgresos*100/this.totalIngresos).toFixed(2))
    }

    
}