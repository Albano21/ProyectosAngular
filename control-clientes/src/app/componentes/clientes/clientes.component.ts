import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClienteServicio } from '../../servicios/cliente.service';
import { Cliente } from 'src/app/modelo/cliente.model';
import { NgForm } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  clientes : Cliente[];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  };

  //@ViewChild("clienteForm") clienteForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;

  constructor(private clientesServicio: ClienteServicio,
              //private toastrService: ToastrService
              ){}

  ngOnInit(): void {
      this.clientesServicio.getClientes().subscribe(
        clientes =>{
          this.clientes = clientes
        }
      )
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.clientes){
      this.clientes.forEach(cliente =>{
          saldoTotal += Number(cliente.saldo);
        } 
      )
    }
    return saldoTotal;
  }

  agregar(form: NgForm){

    if(form.valid){
      this.clientesServicio.agregarCliente(form.value);
      form.resetForm();
      this.cerrarModal();
    }
    else{
      alert('Formulario invalido')
    }

    /*
    if(!form.valid){
      //Mostrar alerta de formulario incorrecto
      //this.toastrService.error("Por favor llena el formulario", "Alerta")
    }
    else{
      //agregarComponente()
    }
    */
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click();
  }

}
