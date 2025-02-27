import { Component, Input } from '@angular/core';
import { Elemento } from '../elemento.model';
import { ElementosService } from '../elementos.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent {

  @Input() egreso : Elemento
  @Input() i : number


  constructor(private elementosService:ElementosService){}

  eliminar(){
    this.elementosService.eliminarElemento(this.i, this.egreso);
  }
}
