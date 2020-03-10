import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../consultas.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-rhoras',
  templateUrl: './rhoras.component.html',
  styleUrls: ['./rhoras.component.sass']
})
export class RhorasComponent implements OnInit {
Documento;
Nombres;
FechaI;
FechaF;
HorarioI;
HorarioF;
InicioExtra;
FinExtra;
MotivoExtra;
EnviarData;
  constructor(public consultar: ConsultasService, public router: Router) { }

  ngOnInit(): void {
  }

  Enviar() {
    this.EnviarData = {
      Documento: this.Documento,
      Nombres: this.Nombres,
      FechaI: this.FechaI,
      FechaF: this.FechaF,
      HorarioI: this.HorarioI,
      HorarioF: this.HorarioF,
      InicioExtra: this.InicioExtra,
      FinExtra: this.FinExtra,
      MotivoExtra: this.MotivoExtra
    }
    this.consultar.RegistrarHora(this.EnviarData).subscribe( respuesta => {
      console.log(respuesta);
      if (respuesta) {
        alert('Registro creado');
        this.router.navigateByUrl('home');
      }
    });
  }

}
