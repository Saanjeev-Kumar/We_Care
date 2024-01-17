import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalTokenInceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req, next) {
    let authService = this.injector.get(HospitalService)

    let tokenizedHospitalReq = req.clone({
      setHeaders: {
        AuthorizationHospital : `Bearer ${authService.getHospitalToken()}`
      }
    })
    return next.handle(tokenizedHospitalReq)
  }
}
