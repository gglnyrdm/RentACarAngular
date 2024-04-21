import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { ModelListItemDto } from '../models/model-list-item-dto';
import { CreatedModelResponse } from '../models/createted-model-response';
import { CreateModelRequest } from '../models/create-model-request';
import { UpdateModelRequest } from '../models/update-model-request';
import { UpdatedModelResponse } from '../models/updated-model-request';
import { GetModelListRequest } from '../models/get-model-list-request';
import { GetModelListResponse } from '../models/get-model-list-response';

@Injectable({
  providedIn: 'root',
})
export class ModelsApiService {
  constructor(private http: HttpClient) {}

  // getList(): Observable<ModelListItemDto[]> {
  //   return this.http.get<ModelListItemDto[]>('http://localhost:3000/models');
  // }

  

  postModel(createModelRequest:CreateModelRequest): Observable<CreatedModelResponse>{
    
    return this.http.post<CreatedModelResponse>(
      'http://localhost:3000/models',
      createModelRequest
    );
  }

  putModel(updateModelRequest:UpdateModelRequest):Observable<UpdatedModelResponse>{
    return  this.http.put<UpdatedModelResponse>(
      `http://localhost:3000/models/${updateModelRequest.id}`,
      updateModelRequest
    );
  }

  getList(request: GetModelListRequest): Observable<GetModelListResponse> {
    const newRequest: { [key: string]: string | number } = {
      _page: request.pageIndex + 1,
      _limit: request.pageSize,
    };
debugger;
    return this.http
      .get<ModelListItemDto[]>('http://localhost:3000/models', {
        params: newRequest,
      })
      .pipe(
        map((response) => {
          const newResponse: GetModelListResponse = {
            pageIndex: request.pageIndex,
            pageSize: request.pageSize,
            hasNextPage: request.pageIndex < 4,
            hasPreviousPage: request.pageIndex > 0,
            items: response,
          };
          return newResponse;
        })
      );
  }
}
