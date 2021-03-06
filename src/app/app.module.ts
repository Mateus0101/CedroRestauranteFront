import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteService } from './restaurante/restaurante.service';
import { DetalhesComponent } from './restaurante/detalhes/detalhes.component';
import { EditarComponent } from './restaurante/editar/editar.component';
import { SalvarComponent } from './restaurante/salvar/salvar.component';
import { Pesquisa } from './restaurante/restaurante.pesquisa';
import { HomeComponent } from './home/home.component';
import { EditarPratoComponent } from './restaurante/prato/editar-prato/editar-prato.component';
import { PratoComponent } from './restaurante/prato/prato.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    DetalhesComponent,
    EditarComponent,
    SalvarComponent,
    Pesquisa,
    HomeComponent,
    PratoComponent,
    EditarPratoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  providers: [RestauranteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
