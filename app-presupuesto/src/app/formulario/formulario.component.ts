import { Component, EventEmitter, Output } from '@angular/core';
import { Elemento } from '../elemento.model';
import { ElementosService } from '../elementos.service';
import { PresupuestoService } from '../presupuesto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //@Output() elementoCreado = new EventEmitter<Elemento>();

  tipoInput : string
  descInput : string
  valorInput: number

  constructor(private elementosService:ElementosService,
    private presupuestoService:PresupuestoService){}

  agregar(){
    let nuevoElemento
    if (this.tipoInput == "ing"){
      nuevoElemento = new Elemento(this.descInput,this.valorInput, this.tipoInput, 0);
    }
    else{
      nuevoElemento = new Elemento(this.descInput,this.valorInput, this.tipoInput, this.presupuestoService.calcularPorcentajeEgreso(this.valorInput))
    }
    
    this.elementosService.agregarElemento(nuevoElemento);
    
  }
}
