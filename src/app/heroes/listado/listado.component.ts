import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroes: string[] = ['Spider', 'Ironman', 'Hulk']
    borrado: string = '';

  
  borrarHeroe(): void {
    this.borrado = this.heroes.shift() || '';
  }

}
