import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { HospitalService } from './hospital.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(HospitalService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization : `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)

  }

}
