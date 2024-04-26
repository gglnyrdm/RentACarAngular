import type { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //Http isteği gönderilmeden önce araya giriyoruz.

  const token = localStorage.getItem('token');
  //Req nesneleri immutable olduğu için klonlamak gerekiyor
  const newReq = req.clone({
    headers: req.headers.set('Authorization', token), //Header a token ı ekliyoruz
  }); //clonelayarak yeni bir referans oluşturduk.
  
  return next(newReq);

  //rxjs pipe: Observable yapıları manipüle etmek/araya girmek için kullanılır
  // return next(newReq).pipe(
  //   catchError((error: any) => {
  //    return throwError(() => new Error('Bir hata oluştu'));
  // })
  // ); // oluşturulan http isteğine newReq ile devam ediyoruz.

};
