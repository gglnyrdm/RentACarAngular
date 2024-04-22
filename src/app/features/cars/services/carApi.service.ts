import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarsListItemDto } from '../models/car-list-item-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  constructor(private http : HttpClient) { }

  getList(): Observable<CarsListItemDto[]> {
    return this.http.get<CarsListItemDto[]>('http://localhost:3000/cars');
  }

}
