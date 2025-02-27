import { Injectable } from "@angular/core";
import { Elemento } from "./elemento.model";
import { PresupuestoService } from "./presupuesto.service";

@Injectable()
export class ElementosService{

    constructor(private presupuestoService:PresupuestoService){}

    ingresos: Elemento[] = [new Elemento("Sueldo", 65000, "ing", 0)];
    egresos: Elemento[] = [new Elemento("Estacionamiento", 1500, "egr", this.presupuestoService.calcularPorcentajeEgreso(1500))];


    agregarElemento(e:Elemento){

        if(e.tipo == "ing"){
            this.ingresos.push(e);
            
        }
        else{
            this.egresos.push(e);
        }
        this.presupuestoService.agregar(e);
        this.actualizarPorcentajesEgreso();

    }

    eliminarElemento(i:number, e:Elemento){
        let eliminado: Elemento[] = [];
        if(e.tipo == "ing"){
            eliminado = this.ingresos.splice(i,1);
        }
        else{
            eliminado = this.egresos.splice(i,1);
        }
        this.presupuestoService.eliminar(eliminado[0])
        this.actualizarPorcentajesEgreso();
    }

    actualizarPorcentajesEgreso(){
        for(let e of this.egresos){
            e.porcentaje = this.presupuestoService.calcularPorcentajeEgreso(-e.valor);
        }
    }
    /*
    agregarIngreso(i:Elemento){
        this.ingresos.push(i);
    }

    agregarEgreso(e:Egreso){
        this.egresos.push(e);
    }
    */
}