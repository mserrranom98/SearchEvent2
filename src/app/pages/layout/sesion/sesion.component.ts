import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {ActivatedRoute, Router} from '@angular/router';
import notify from "devextreme/ui/notify";

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html'
})
export class SesionComponent implements OnInit {

  formUsuario: FormGroup;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    /** Inicializa los campos necesarios para ingresar al sistema */
    this.formUsuario = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  loadIndicatorVisible = false;

  login() {
    const email = this.formUsuario.getRawValue().email;
    const password = this.formUsuario.getRawValue().password;

    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
            .then(value => {
        this.getToken();
        this.router.navigate(['/cuentas/consulta'], {relativeTo: this.route.parent});
        this.loadIndicatorVisible = true;
        notify('Se ha ingresado con exito.');
      })
      .catch(error => {
        this.loadIndicatorVisible = true;
        console.log('Something went wrong:', error.message);
        notify('Ha ocurrido un error intentelo nuevamente.');
      });
  }

  getToken() {
    firebase.auth().currentUser.getIdToken(true).then((idToken: string) => {
      localStorage.setItem('token', idToken);
    }).catch(error => {
      console.log(error);
    });
  }

}
