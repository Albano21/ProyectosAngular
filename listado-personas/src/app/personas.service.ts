import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';

@Injectable()
export class PersonasService{
    personas : Persona[] = [];

    saludar = new EventEmitter<number>();

    constructor(private LoggingService:LoggingService,
                private dataServices: DataServices){};
                
    setPersonas(personas:Persona[]){
        this.personas = personas
    }

    agregarPersona(p: Persona){
        this.LoggingService.enviarMensajeAConsola("Agregamos persona: nombre: " + p.nombre + ", apellido: " + p.apellido);
        if(this.personas == null){
            this.personas = [];
        }
        this.personas.push(p);
        this.dataServices.guardarPersonas(this.personas)
    }

    encontrarPersona(i: number):Persona{
        let persona: Persona = this.personas[i];
        return persona;
    }

    modificarPersona(i:number, p:Persona){
        let persona: Persona = this.personas[i];
        persona.nombre = p.nombre;
        persona.apellido = p.apellido;
        this.dataServices.modificarPersona(i, p)
    }
    
    eliminarPersona(i:number){
        this.personas.splice(i,1);
        this.dataServices.eliminarPersona(i);
        //se vuelve a guardar el arreglo
        this.modificarPersonas();
    }

    obtenerPersonas(){
        return this.dataServices.cargarPersonas();
    }

    private modificarPersonas(){
        if(this.personas != null){
            this.dataServices.guardarPersonas(this.personas);
        }
    }

}