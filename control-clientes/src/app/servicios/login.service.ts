import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
@Injectable()
export class LoginServicio{

    constructor(private authService: AngularFireAuth){}

    login(email: string, password: string){
        return new Promise((resolve, reject) => {
            this.authService.signInWithEmailAndPassword(email, password)
            .then( datos => resolve(datos),
                error => reject(error))
        })
    }

    getAuth(){
        return this.authService.authState.pipe(
            map( auth => auth)
        );
    }

    logOut(){
        this.authService.signOut();
    }

    registrar(email: string, password: string){
        return new Promise((resolve, reject) =>{
            this.authService.createUserWithEmailAndPassword(email, password)
            .then(datos => resolve(datos),
                error => reject(error))
        })
    }



}