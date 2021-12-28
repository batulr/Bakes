import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { itemsI } from './itemsI';

@Injectable({
  providedIn: 'root',
})
export class ItemsDispService {
  private cake: string = 'assets/data/cakes.json';
  private cupcake: string = 'assets/data/cupcakes.json';
  private cakejar: string = 'assets/data/cakejars.json';

  constructor(private http: HttpClient) {}

  getCake(): Observable<itemsI[]> {
    return this.http.get<itemsI[]>(this.cake);
  }
  getCups(): Observable<itemsI[]> {
    return this.http.get<itemsI[]>(this.cupcake);
  }
  getJar(): Observable<itemsI[]> {
    return this.http.get<itemsI[]>(this.cakejar);
  }
}
