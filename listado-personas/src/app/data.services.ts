import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient,
                private  loginService: LoginService){}

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-24a54-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    guardarPersonas(personas:Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-24a54-default-rtdb.firebaseio.com/datos.json?auth='+token,personas)
        .subscribe(
            response =>{
                console.log("Resultado guardar personas: " + response);
            },
            error  =>{
                console.log("Error al guardar personas: "+ error);
            }
            
        );
    }

    modificarPersona(i:number, persona: Persona){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-24a54-default-rtdb.firebaseio.com/datos/' +i+'.json?auth='+token;
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log("Resultado modificar Persona: " + response),
            error => console.log("Error al moodificar Persona: "+ error)
        );
    }

    eliminarPersona(i:number){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-24a54-default-rtdb.firebaseio.com/datos/' +i+'.json?auth='+token;
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("Resultado eliminar Persona: " + response),
            error => console.log("Error al eliminar Persona: "+ error)
        );
    }


}