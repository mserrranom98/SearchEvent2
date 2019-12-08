import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './pages/layout/main/main.component';
import {LayoutRoutes} from './pages/layout/layout-routing.module';
import {SesionComponent} from './pages/layout/sesion/sesion.component';
import {AuthGuardService} from './shared/services/auth/auth-guard.service';


const routes: Routes = [
  { path: '', component: MainComponent, data: { title: 'Main' }, children: LayoutRoutes },
  { path: 'login', component: SesionComponent, data: { title: 'Login' } },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
