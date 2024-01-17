import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {


  constructor(private http: HttpClient) { }

  requestStates() {
    return this.http.get<any>("../assets/data/districts.json")
  }

  getStates(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.requestStates().subscribe(
        response => resolve(response),
        err => reject(err)
      )
    })
  }

  requestStateWiseCovidData(){
    return this.http.get<any>("../assets/data/data.json");
  }

  getStateWiseCovidData(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.requestStateWiseCovidData().subscribe(
        response => { resolve(response); },
        err => { reject(err) }
      )
    })
  }

  requestDistrictWiseCovidData(){
    return this.http.get<any>("../assets/data/covid_stateWise.json")
  }

  getDistrictWiseCovidData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.requestDistrictWiseCovidData().subscribe(
        response => { resolve(response) },
        err => { reject(err) }
      )
    })
  }

  requestStateWiseHistoricalData() {
    return this.http.get<any>("../assets/data/history.json")
  }

  getStateWiseHistoricalData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.requestStateWiseHistoricalData().subscribe(
        response => {resolve(response)},
        err => {reject(err)}
      )
    })
  }

  postSubscription(sub: PushSubscription){
    return this.http.post<any>("https://wecareserver.herokuapp.com/subscribe", sub)
  }

   requestAllCovidData(){
     return this.http.get<any>("https://corona.lmao.ninja/v2/countries");
   }

   getAllCovidData(): Promise<any>{
     return new Promise ((resolve, reject) =>{
       this.requestAllCovidData().subscribe(
         response => resolve(response),
         err => reject(err)
       )
     })
   }
}
