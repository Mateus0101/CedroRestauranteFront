import { browser } from 'protractor';
import { URLSearchParams } from '@angular/http';
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { RestauranteService } from '../../restaurante.service';

@Component({
  selector: 'app-editar-prato',
  templateUrl: './editar-prato.component.html',
  styleUrls: ['./editar-prato.component.css']
})
export class EditarPratoComponent implements OnInit {

  prato: Object[] = [];

  constructor(private router: Router, private restaurante: RestauranteService) { }

      ngOnInit() {
        this.prato = this.restaurante.pratos;
      }

      onSubmit(form) {
        console.log(form);
        this.restaurante.pratoUpdate(this.prato);
        this.router.navigateByUrl('/restaurante');
      }
  }