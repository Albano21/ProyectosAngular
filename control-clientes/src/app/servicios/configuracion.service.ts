import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Configuracion } from '../modelo/configuracion.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfiguracionServicio{
    configuracionDoc: AngularFirestoreDocument<Configuracion>;
    configuracion: Observable<Configuracion>;

    id = '1';

    constructor(private db: AngularFirestore){}

    getConfiguracion():Observable<Configuracion>{
        this.configuracionDoc= this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracion = this.configuracionDoc.valueChanges() as any;
        return this.configuracion;
    }

    modificarConfiguracion(configuracion:Configuracion){
        this.configuracionDoc= this.db.doc<Configuracion>(`configuracion/${this.id}`);
        this.configuracionDoc.update(configuracion);
    }
}