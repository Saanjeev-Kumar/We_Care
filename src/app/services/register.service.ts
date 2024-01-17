/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient) { }

  requestOtp(phoneNumber:  string ){
   return this.http.get<any>(`https://wecareserver.herokuapp.com/getOTP?phonenumber=${ phoneNumber }`);
  }//requestOtp

  verifyOTP(phoneNumber: string, OTP: string)
  {
    return this.http.get<any>(`http://localhost:8016/verifyOTP?phonenumber=${ phoneNumber }&code=${ OTP }`);
  }//verifyOTP

  otpVerification(phn:string, otp:string): Promise<any>{
    return new Promise((resolve, reject) => {
      this.verifyOTP(phn, otp).subscribe(
        response => resolve(response),
        err => reject(err)
      )
    })
  }//otpVerification
  requestStates(){
    return this.http.get<any>("../assets/data/districts.json");
  }//requestStates

  getStates(): Promise<any>{
    return new Promise((resolve, reject ) => {
      this.requestStates().subscribe(
        response => resolve(response),
        err => reject(err)
      )
    })
  }//getStates

  getAddPlasmaDonorDetails(data : any):Observable<any>{
    return this.http.post("http://localhost:8016/plasma-donors", data);
  }

  requestHosptials(){
    return this.http.get<any>("http://localhost:8016/hospital");
  }

  getHospitals(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.requestHosptials().subscribe(
        response => resolve(response),
        err => reject(err)
      )
    })
  }

  postVaccinationRegistries(data: any):Observable<any> {
    return this.http.post<any>("http://localhost:8016/vaccination-registries", data)
  }

  vaccinationRegistries(data:any):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.postVaccinationRegistries(data).subscribe(
        response=>resolve(response),
        err=>reject(err)
      )
    })
  }


  getVaccineRegistrationDetails(){
    return this.http.get<any>(`http://localhost:8016/vaccination-registries/documentIdNumber`)
  }

  vaccinationRegistriesDetails():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.getVaccineRegistrationDetails().subscribe(
        response=>resolve(response),
        err=>reject(err)
      )
    })
  }

  getHospitalsByDistrict(district: any):Observable<any>{
    return this.http.get<any>(`http://localhost:8016/findby/`+`${ district }`)
    }

  postSubscription(sub: PushSubscription){
    return this.http.post<any>("http://localhost:8016/subscribe", sub)
  }

  onRegisterUserDetails(userDetails:any){
    return this.http.post<any>("http://localhost:8016/plasma-receivers",userDetails);
  }

  onRegisterDonarDetaills(district:any){
    return this.http.get<any>(`http://localhost:8016/plasma-donors/${district}`);
  }

}

 */



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient) { }

  requestOtp(phoneNumber:  string ){
   return this.http.get<any>(`https://wecareserver.herokuapp.com/getOTP?phonenumber=${ phoneNumber }`);
  }//requestOtp

  verifyOTP(phoneNumber: string, OTP: string)
  {
    return this.http.get<any>(`https://wecareserver.herokuapp.com/verifyOTP?phonenumber=${ phoneNumber }&code=${ OTP }`);
  }//verifyOTP

  otpVerification(phn:string, otp:string): Promise<any>{
    return new Promise((resolve, reject) => {
      this.verifyOTP(phn, otp).subscribe(
        response => resolve(response),
        err => reject(err)
      )
    })
  }//otpVerification
  requestStates(){
    return this.http.get<any>("../assets/data/districts.json");
  }//requestStates

  getStates(): Promise<any>{
    return new Promise((resolve, reject ) => {
      this.requestStates().subscribe(
        response => resolve(response),
        err => reject(err)
      )
    })
  }//getStates

  getAddPlasmaDonorDetails(data : any):Observable<any>{
    return this.http.post("https://wecareserver.herokuapp.com/plasma-donors", data);
  }

  requestHosptials(){
    return this.http.get<any>("https://wecareserver.herokuapp.com/hospital");
  }

  getHospitals(): Promise<any>{
    return new Promise((resolve, reject) => {
      this.requestHosptials().subscribe(
        response => resolve(response),
        err => reject(err)
      )
    })
  }

  postVaccinationRegistries(data: any) {
    return this.http.post<any>("https://wecareserver.herokuapp.com/vaccination-registries", data)
  }

  requestVaccineRegistrationDetails(documentIdNumber: any):Observable<any>{
    return this.http.get<any>(`https://wecareserver.herokuapp.com/vaccination-registries-by-documentId/${documentIdNumber}`)
  }

  getVaccineRegistrationDetails(documentIdNumber: any):Promise<any>{
    return new Promise((res,rej) => {
      this.requestVaccineRegistrationDetails(documentIdNumber).subscribe(
        response => {res(response)},
        err => {rej(err)}
      )
    })
  }

  getHospitalsByDistrict(district: any):Observable<any>{
    return this.http.get<any>(`https://wecareserver.herokuapp.com/findby/`+`${ district }`)
    }

  postSubscription(sub: PushSubscription){
    return this.http.post<any>("https://wecareserver.herokuapp.com/subscribe", sub)
  }

  onRegisterUserDetails(userDetails:any){
    return this.http.post<any>("https://wecareserver.herokuapp.com/plasma-receivers",userDetails);
  }

  onRegisterDonarDetaills(district:any){
    return this.http.get<any>(`https://wecareserver.herokuapp.com/plasma-donors/${district}`);
  }

}
