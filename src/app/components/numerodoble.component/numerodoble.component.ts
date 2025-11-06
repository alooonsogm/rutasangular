import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  standalone: false,
  templateUrl: './numerodoble.component.html',
  styleUrl: './numerodoble.component.css',
})
export class NumerodobleComponent implements OnInit{
  public doble: number;
  public numero!: number;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router){
    this.doble = 0;
  }

  ngOnInit(): void {
    //Aqui es donde nos suscribimos a los parametros.
    this._activeRoute.params.subscribe((parametros: Params) => {
      //Dentro de Params es donde recibimos los parametros por su :name
      //La sintaxis para recuperarlos es params['Parameter name']
      //En este caso el parametro es opcional.
      if (parametros['numero'] != null){
        //El parametro siempre son string
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }
    })
  }

  goToHome(): void {
    this._router.navigate(["/"]);
  }

  redirect(num: number): void {
    this._router.navigate(["/numerodoble", num]);
  }
}
