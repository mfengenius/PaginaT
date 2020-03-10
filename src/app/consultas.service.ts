import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor( public Http: HttpClient) { }


  RegistrarHora(Datos) {
    return this.Http.post('/api/registrar', Datos);
  }

  ConsultarHoras() {
    return this.Http.post('/api/consultar', {null: null});
  }
}
