import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  
  resultado : number;

  mostrarResultado(res:number):void{
    this.resultado = res
  }

}
