import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicio } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email:string
  password:string

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

  login(){
    this.loginServicio.login(this.email, this.password)
      .then(res => {
        this.router.navigate(['/'])
      })
      .catch(error => {
        alert(error.message)
      })
  }

}
