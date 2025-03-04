import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enviroment } from 'src/enviroments/enviroments';
import { AngularFireModule } from '@angular/fire/compat';
import { Firestore, getFirestore } from '@angular/fire/firestore/';
import { AngularFireAuthModule, SETTINGS } from '@angular/fire/compat/auth';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { ClienteServicio } from './servicios/cliente.service'; 
import { LoginServicio } from './servicios/login.service';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionServicio } from './servicios/configuracion.service';
import { ConfiguracionGuard } from './guardianes/configuracion.guard';

@NgModule({
  declarations: [ 
    AppComponent,
    CabeceroComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(enviroment.firestore, 'control-clientes'),
    //AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    ClienteServicio,
    LoginServicio,
    AuthGuard, 
    ConfiguracionServicio,
    ConfiguracionGuard,
    {provide: SETTINGS, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
