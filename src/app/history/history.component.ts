import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../consultas.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {
Resultado;
  constructor( public consultar: ConsultasService) { }

  ngOnInit(): void {
    this.consultar.ConsultarHoras().subscribe(result => {
      console.log(result);
      this.Resultado = result;
    });
  }

}
