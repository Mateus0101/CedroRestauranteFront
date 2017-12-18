import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})
export class PratoComponent implements OnInit {

  prato: Object[] = [];

  constructor(private router: Router, private restaurante: RestauranteService) { }

      ngOnInit() {
        this.prato = this.restaurante.restaurant;
      }

      onSubmit(form) {
        console.log(form);
        this.restaurante.pratoCreate(form.value);
        this.router.navigateByUrl('/restaurante');
      }
  }
