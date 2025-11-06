import { Component } from '@angular/core';

@Component({
  selector: 'app-menutabla',
  standalone: false,
  templateUrl: './menutabla.component.html',
  styleUrl: './menutabla.component.css',
})
export class MenutablaComponent{
  public arrayNumerosAleatorios: Array<number>;

  constructor(){
    this.arrayNumerosAleatorios = [Math.floor((Math.random() * 50) + 1), Math.floor((Math.random() * 50) + 1), Math.floor((Math.random() * 50) + 1), Math.floor((Math.random() * 50) + 1), Math.floor((Math.random() * 50) + 1), Math.floor((Math.random() * 50) + 1)];
  }
}
