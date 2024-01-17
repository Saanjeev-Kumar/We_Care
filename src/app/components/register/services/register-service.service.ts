import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) { }
  requestStates() {
    return this.http.get<any>('../../../../assets/data/districts.json')
  }

  getStates(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.requestStates().subscribe(
        response => resolve(response),
        err => reject(err)
      )
    })
  }
}
