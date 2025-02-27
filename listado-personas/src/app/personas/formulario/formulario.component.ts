import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  constructor(private loggingService:LoggingService,
              private personasService:PersonasService,
              private router: Router,
              private route:ActivatedRoute){
                this.personasService.saludar.subscribe((i: number) => alert("El indice es: " + i))
              }
  
  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidoInput: string = '';
  i: number
  modoEdicion: number;
  
  ngOnInit(): void {
      this.i = this.route.snapshot.params['id'];
      this.modoEdicion = Number(this.route.snapshot.queryParams['modoEdicion']);

      if(this.modoEdicion != null && this.modoEdicion === 1){
        let persona: Persona = this.personasService.encontrarPersona(this.i);
        this.nombreInput = persona.nombre;
        this.apellidoInput = persona.apellido;
      }
  }

  guardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personasService.modificarPersona(this.i, persona1);
    }
    else{
      this.personasService.agregarPersona(persona1);
    }

    this.router.navigate(['personas'])
  }

  eliminarPersona(){
    if(this.i != null){
      this.personasService.eliminarPersona(this.i);
    }
    this.router.navigate(['personas'])
  }
}
