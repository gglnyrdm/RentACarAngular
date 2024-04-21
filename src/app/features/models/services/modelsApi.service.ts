import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { ModelListItemDto } from '../models/model-list-item-dto';
import { CreatedModelResponse } from '../models/createted-model-response';
import { CreateModelRequest } from '../models/create-model-request';

@Injectable({
  providedIn: 'root',
})
export class ModelsApiService {
  constructor(private http: HttpClient) {}

  getList(): Observable<ModelListItemDto[]> {
    return this.http.get<ModelListItemDto[]>('http://localhost:3000/models');
  }

  

  postModel(createModelRequest:CreateModelRequest): Observable<CreatedModelResponse>{
    
    return this.http.post<CreatedModelResponse>(
      'http://localhost:3000/models',
      createModelRequest
    );
  }
}
