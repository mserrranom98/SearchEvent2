import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/layout/main/main.component';
import { SesionComponent } from './pages/layout/sesion/sesion.component';
import * as firebase from 'firebase';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {SharedModule} from './shared/shared.module';
import {AuthGuardService} from './shared/services/auth/auth-guard.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SesionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    HttpClient,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
