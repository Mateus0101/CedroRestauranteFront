import { browser } from 'protractor';
import { URLSearchParams } from '@angular/http';
import { Location } from '@angular/common';
import { routing } from './../../app.routes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { RestauranteService } from './../restaurante.service';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.component.html',
  styleUrls: ['./salvar.component.css']
})
export class SalvarComponent implements OnInit {

  constructor(private router: Router, private restaurante: RestauranteService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    this.restaurante.restauranteCreate(form.value);
    this.restaurante.restaurantesAll();
    this.router.navigate(['/restaurante']);
  }
}
