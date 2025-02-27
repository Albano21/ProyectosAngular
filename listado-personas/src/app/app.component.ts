import { Component, EventEmitter, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Listado de personas';
 
  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBqb8NDJR6uZzMz0OQxhJtqz5xSvBme44o",
        authDomain: "listado-personas-24a54.firebaseapp.com"
      }
    )
  }

  isAuthenticated(){
    return this.loginService.isAuthenticated();
  }

  salir(){
    this.loginService.logOut();
  }

  
}
