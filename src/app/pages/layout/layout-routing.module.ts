import { Routes } from '@angular/router';


export const LayoutRoutes: Routes = [
  { path: 'inicio', loadChildren: './pages/content/inicio/inicio.module#InicioModule' },
  { path: 'eventos', loadChildren: './pages/content/eventos/eventos.module#EventosModule' },
  { path: 'eventos', loadChildren: './pages/content/compras/compras.module#ComprasModule' },
  { path: 'eventos', loadChildren: './pages/content/localizacion/localizacion.module#LocalizacionModule' }
];
