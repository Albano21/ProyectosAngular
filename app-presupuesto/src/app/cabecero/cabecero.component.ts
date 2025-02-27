import { Component, Input, OnInit } from '@angular/core';
import { PresupuestoService } from '../presupuesto.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit{

  @Input() presupuesto : number;
  @Input() totalIngresos :number;
  @Input() totalEgresos :number;
  @Input() porcentajeTotalEgresos:number;

  constructor(private presupuestoService:PresupuestoService){}
  
  ngOnInit(): void {
    this.presupuesto = this.presupuestoService.presupuesto;
    this.totalIngresos = this.presupuestoService.totalIngresos;
    this.totalEgresos = this.presupuestoService.totalEgresos;
    this.porcentajeTotalEgresos = this.presupuestoService.porcentajeTotalEgresos;
  }

  

  
  
}
