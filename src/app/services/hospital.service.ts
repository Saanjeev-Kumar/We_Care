import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private hsptl_URL:string="https://wecareserver.herokuapp.com/hospital";
  private plasma_donor_URL: string = "https://wecareserver.herokuapp.com/plasma-donors";
  private plasma_reciver_URL: string = "https://wecareserver.herokuapp.com/plasma-receivers";
  private vaccination_Registration_URL: string = "https://wecareserver.herokuapp.com/vaccination-registries";
  private admin_URL:string="https://wecareserver.herokuapp.com/admin";
  private admin_URL_byUsername:string="https://wecareserver.herokuapp.com/admin_by_username";
  private hsptlSingleData_URL:string="https://wecareserver.herokuapp.com/hospitalSingleData/";
  private plasmaDonors_byHospitalName_URL:string="https://wecareserver.herokuapp.com/plasma-donors-by-hospitalName"
  private vaccineRegistries_byHospitalName_URL:string="https://wecareserver.herokuapp.com/vaccination-registries-by-hospital"


  constructor(private http: HttpClient, private router: Router) { }

  getvaccinationRegistrationDetails(): Observable<any> {
    return this.http.get(this.vaccination_Registration_URL);
  }

  displayVaccinationRegistrationDetails(): Promise<any> {
    return new Promise((res, rej) => {
      this.getvaccinationRegistrationDetails().subscribe(
        response => res(response),
        err => rej(err)
      )
    })
   }


  getPlasmaReceiverDetails(): Observable<any> {
    return this.http.get(this.plasma_reciver_URL);
  }

  displayPlasmaReceiverDetails(): Promise<any> {
    return new Promise((res, rej) => {
      this.getPlasmaReceiverDetails().subscribe(
        response => res(response),
        err => rej(err)
      )
    })
  }

  getPlasmaDonationDetails(): Observable<any> {
    return this.http.get(this.plasma_donor_URL);
  }

  displayPlasmaDonationDetail():Promise<any> {
    return new Promise((res, rej) => {
      this.getPlasmaDonationDetails().subscribe(
        response => res(response),
        err => rej(err)
      )
    })
  }

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

  getHsptlUserAllDetails():Observable<any>{
    return this.http.get(this.hsptl_URL);
  }

  displayHsptlUserAllDetails():Promise<any> {
    return new Promise((res, rej) => {
      this.getHsptlUserAllDetails().subscribe(
        response => res(response),
        err => rej(err)
      )
    })
  }




    getAddHospitalDetails(username:any):Observable<any>{
    return this.http.post(this.hsptl_URL,username);
    }



  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/department-login'])
  }

  HospitallogoutUser() {
    localStorage.removeItem('Hospitaltoken')
    this.router.navigate(['/department-login'])
  }

  getHsptlUserDetails(username:any):Observable<any>{
    return this.http.get(this.hsptl_URL+`/${username}`);
  }
  getHsptlNameDetail(hospitalName:any):Observable<any>{
    return this.http.get(this.hsptlSingleData_URL+`${hospitalName}`);
  }
  getAdminUserDetails(username:any):Observable<any>{
    return this.http.get(this.admin_URL_byUsername+`/${username}`);
  }
  addHospitalDetails(username:any):Observable<any>{
    return this.http.post(this.hsptl_URL,username);
  }
  deleteHospitalDetails(username:any):Observable<any>{
    return this.http.delete(this.hsptl_URL+`/${username}`);
  }
  plasmaDonorsDetails(hospitalName:any):Observable<any>{
    return this.http.get(this.plasmaDonors_byHospitalName_URL+`/${hospitalName}`);
  }

  vaccinationRegistriesDetails(hospitalName:any):Observable<any>{
    return this.http.get(this.vaccineRegistries_byHospitalName_URL+`/${hospitalName}`);
  }

  plasmaDonorsParticularHospital(hospitalName:any):Promise<any> {
    return new Promise((res, rej) => {
      this.plasmaDonorsDetails(hospitalName).subscribe(
        response => res(response),
        err => rej(err)
      )
    })
  }

  vaccineRegistrationParticularHospital(hospitalName:any):Promise<any> {
    return new Promise((res, rej) => {
      this.vaccinationRegistriesDetails(hospitalName).subscribe(
        response => res(response),
        err => rej(err)
      )
    })
  }

}



  // getHsptlUserDetails(email):Observable<any>{
  //   return this.http.get(this.hsptl_URL+`/${email}`);
  // }
  // getAdminUserDetails(email):Observable<any>{
  //   return this.http.get(this.admin_URL+`/${email}`);
  // }
  // getAddHospitalDetails(email:any):Observable<any>{
  //   return this.http.post(this.hsptl_URL,email);
  // }
