import { Routes } from '@angular/router';

import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';



export const USUARIO_ROUTES: Routes = [
    { path: 'Agregar', component: UsuarioNuevoComponent },
    { path: 'Editar', component: UsuarioEditarComponent },
    { path: 'Detalle', component: UsuarioDetalleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Editar' },
];



