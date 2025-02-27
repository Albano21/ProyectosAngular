import { Component, Input } from '@angular/core';
import { Elemento } from '../elemento.model';
import { ElementosService } from '../elementos.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {

  @Input() ingreso : Elemento
  @Input() i : number

  constructor(private elementosService:ElementosService){}

  eliminar(){
    this.elementosService.eliminarElemento(this.i, this.ingreso);
  }
  
}
