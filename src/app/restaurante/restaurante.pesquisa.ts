import { Pipe, PipeTransform } from '@angular/core';
import { RestauranteComponent } from './restaurante.component';

@Pipe({
    name: 'pesquisa'
})
export class Pesquisa implements PipeTransform {
    transform(restaurantes, digitado) {

        digitado = digitado.toLowerCase();
        return restaurantes.filter( restaurantes => restaurantes.nome.toLowerCase().includes(digitado));
    }

}
