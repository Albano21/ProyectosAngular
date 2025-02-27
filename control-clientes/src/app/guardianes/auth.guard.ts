import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard{

    constructor(
        private router: Router, 
        private afAuth: AngularFireAuth) {}
 
    canActivateLogin() : Observable<boolean>{

        return this.afAuth.authState.pipe(
            map( auth => {
                if(!auth){
                    this.router.navigate(['/login']);
                    return false;
                }
                else{
                    return true;
                }
            })
        )
        /*
          if (this.loginServicio.isAuthenticated()) {
                return true;
          } else {
                this.router.navigate(["login"]);
                return false;
          }
          */
    }
}