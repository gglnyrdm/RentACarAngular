import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandListItemDto } from '../models/brand-list-item-dto';
import { PostBrandRequest } from '../models/post-brand-request';
import { PostBrandResponse } from '../models/post-brand-response';
import { UpdateBrandRequest } from '../models/update-brand-request';
import { UpdateBrandResponse } from '../models/update-brand-response';
import { GetBrandByIdResponse } from '../models/get-brand-by-id-response';



@Injectable({
  providedIn: 'root'
})
export class BrandsApiService {

  constructor(private http : HttpClient) { }

  getList(): Observable<BrandListItemDto[]> {
    return this.http.get<BrandListItemDto[]>('http://localhost:3000/brands');
  }

  getById(id:number): Observable<GetBrandByIdResponse> {
    debugger;
    return this.http.get<GetBrandByIdResponse>(
      `http://localhost:3000/brands/${id}`
    );
  }
  
  postBrand(brand:PostBrandRequest):Observable<PostBrandResponse>{
    return this.http.post<PostBrandResponse>(
      'http://localhost:3000/brands',
      brand
    );
  }
  

  updateBrand(updateBrandRequest:UpdateBrandRequest):Observable<UpdateBrandResponse>{
    return  this.http.put<UpdateBrandResponse>(
      `http://localhost:3000/brands/${updateBrandRequest.id}`,
      updateBrandRequest
    );
  }

}

