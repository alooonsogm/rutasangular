import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicarrouting',
  standalone: false,
  templateUrl: './tablamultiplicarrouting.component.html',
  styleUrl: './tablamultiplicarrouting.component.css',
})
export class TablamultiplicarroutingComponent implements OnInit{
  public arrayTabla: Array<number>;
  public numero: number;

  constructor(private _activeRoute: ActivatedRoute){
    this.numero = 0;
    this.arrayTabla = new Array<number>;
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
        this.numero = parseInt(parametros['numero']);
        this.arrayTabla = new Array<number>;
        for(var x =1; x<=10; x++){
          this.arrayTabla.push(this.numero * x);
        }
    })
  }
}
