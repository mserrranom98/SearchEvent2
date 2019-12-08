import { Routes } from '@angular/router';


export const LayoutRoutes: Routes = [
  { path: 'inicio', loadChildren: './pages/content/inicio/inicio.module#InicioModule' },
  { path: 'eventos', loadChildren: './pages/content/eventos/eventos.module#EventosModule' }
];
