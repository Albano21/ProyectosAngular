import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente= {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  };

  id : string;

  //@ViewChild("clienteForm") clienteForm: NgForm;

  constructor( 
              private clientesServicio: ClienteServicio,
              private router: Router,
              private route: ActivatedRoute ){}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.clientesServicio.getCliente(this.id).subscribe( cliente => {
        this.cliente = cliente;
      })
  }

  guardar(form :NgForm){
    if(form.valid){
      form.value.id = this.id
      this.clientesServicio.modificar(form.value);
      this.router.navigate(['/']);
    }
    else{
      alert('Formulario invalido')
    }
  }

  eliminar(){
    if(confirm('seguro que desea eliminar el cliente?')){
      this.clientesServicio.eliminar(this.cliente);
      this.router.navigate([('/')])
    }
  }

}
