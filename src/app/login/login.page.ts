import { Component, OnInit } from '@angular/core';

import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router
    ){

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    })


  }

  ngOnInit() {
  }

    
  async ingresar() {
    var f = this.formularioLogin.value;
    var usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      if (usuario.nombre == f.nombre && usuario.password == f.password) {
        console.log('Ingresado');
        this.router.navigate(['/home']);
        localStorage.setItem('ingresado', 'true');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Tienes que llenar todos los datos',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      // Manejo de caso cuando no se encuentra el valor en localStorage
    }
  }  
  

  /*
  async ingresar() {
    if (this.formularioLogin.valid) {

      const nombre = this.formularioLogin.value.nombre;
      const password = this.formularioLogin.value.password;

      if (nombre === "usuario" && password === "1234") {

        console.log("Credenciales válidas");
          this.router.navigate(['/home']);

      } else {
        console.log("Credenciales inválidas");
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Usuario o contraseña inválida. Por favor, inténtalo nuevamente.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      console.log("Formulario inválido");

  
    }
    

  } */
}









  