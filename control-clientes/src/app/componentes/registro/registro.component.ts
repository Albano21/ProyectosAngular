import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicio } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  email: string;
  password: string;

  constructor(private router: Router,
    private loginServicio : LoginServicio){

  }

  ngOnInit(): void {
    this.loginServicio.getAuth().subscribe( auth => {
      if(auth){
        this.router.navigate(['/'])
      }
    })
  }

  registrar(){
    this.loginServicio.registrar(this.email, this.password)
      .then( res => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        alert(error.message);
      })
  }

}
