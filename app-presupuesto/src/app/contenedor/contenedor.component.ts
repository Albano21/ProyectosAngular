import { Component, OnInit } from '@angular/core';
import { ElementosService } from '../elementos.service';
import { Elemento } from '../elemento.model';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

 ingresos : Elemento[] 
 egresos: Elemento[]

 constructor(private elementosService:ElementosService){}

 ngOnInit(): void {
   this.ingresos = this.elementosService.ingresos;
   this.egresos = this.elementosService.egresos;
 }


}
