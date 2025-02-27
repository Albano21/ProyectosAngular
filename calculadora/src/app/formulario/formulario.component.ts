import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  operandoA : number = 0;
  operandoB : number = 0;

  @Output() resultadoCalculado = new EventEmitter<number>()

  sumar(){
    let resultado = this.operandoA + this.operandoB;
    this.resultadoCalculado.emit(resultado)
  }
}
