import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { DetalhesComponent } from './restaurante/detalhes/detalhes.component';
import { EditarComponent } from './restaurante/editar/editar.component';
import { SalvarComponent } from './restaurante/salvar/salvar.component';
import { HomeComponent } from './home/home.component';
import { PratoComponent } from './restaurante/prato/prato.component';
import { EditarPratoComponent } from './restaurante/prato/editar-prato/editar-prato.component';

const routes: Routes = [

        {path: 'restaurante', component: RestauranteComponent},
        {path: 'restaurante/details', component: DetalhesComponent},
        {path: 'restaurante/editar', component: EditarComponent},
        {path: 'restaurante/salvar', component: SalvarComponent},
        {path: 'restaurante/pratos', component: PratoComponent},
        {path: 'restaurante/pratos/editar', component: EditarPratoComponent},
        {path: '', component: HomeComponent}
    ];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
