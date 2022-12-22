import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  getDatos() {
    return this.http.get('https://scratchya.com.ar/vue/datos.php');
  }
}
