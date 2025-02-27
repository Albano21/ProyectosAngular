import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";


@Injectable()
export class LoginGuardian{

    constructor(private loginService: LoginService, private router: Router) {}
 
    canActivateLogin() {
          if (this.loginService.isAuthenticated()) {
                return true;
          } else {
                this.router.navigate(["login"]);
                return false;
          }
    }
}