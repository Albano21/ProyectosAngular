import { Component } from '@angular/core';
import { PresupuestoService } from './presupuesto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private presupuestoService:PresupuestoService){}


  
  getPresupuesto(): number{
    return this.presupuestoService.presupuesto;
  }

  getTotalIngresos(): number{
    return this.presupuestoService.totalIngresos;
  }

  getTotalEgresos(): number{
    return this.presupuestoService.totalEgresos;
  }
  

  getPorcentajeTotalEgresos(): number{
    return this.presupuestoService.porcentajeTotalEgresos;
  }



}
