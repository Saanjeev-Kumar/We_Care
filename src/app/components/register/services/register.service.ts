import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // private userDetails_URL:string="http://localhost:8016/userDetails";
  // private phone_URL:string="http://localhost:8016/phoneNo";
  constructor(private http: HttpClient) { }
  requestOtp(phoneNumber:  string ){
    return this.http.get<any>(`https://wecareserver.herokuapp.com/getOTP?phonenumber=${ phoneNumber }`);
   }

   verifyOTP(phoneNumber: string, OTP: string)
   {
     return this.http.get<any>(`https://wecareserver.herokuapp.com/verifyOTP?phonenumber=${ phoneNumber }&code=${ OTP }`);
   }
   otpVerification(phn:string, otp:string): Promise<any>{
    return new Promise((resolve, reject) => {
      this.verifyOTP(phn, otp).subscribe(
        response => resolve(response),
        err => reject(err)
      )
    })
  }
  getDistrictWiseMatchedDonorDetails(data:any):Promise<any>{
    return new Promise((res,rej)=>{
      this.onRegisterDonarDetaills(data).subscribe(
        response=> res(response),
        err=>rej(err)
      )
    })

  }

  onRegisterUserDetails(userDetails:any){
    return this.http.post<any>("https://wecareserver.herokuapp.com/plasma-receivers",userDetails);
  }

  onRegisterDonarDetaills(district:any){
    return this.http.get<any>(`https://wecareserver.herokuapp.com/plasma-donors_by_district/${district}`);
  }
  // onRegisterPhoneNo(phoneNo:any){
  //   return this.http.post<any>("http://localhost:8016/phoneNo",phoneNo);
  // }
}












//   requestOtp(phoneNumber:  string ){
//    return this.http.get<any>(`http://localhost:8016/getOTP?phonenumber=${ phoneNumber }`);
//   }

//   getOtp(phoneNumber : string) : Promise<any>{
//     return new Promise((resolve , reject) =>{
//       this.requestOtp(phoneNumber)
//       .subscribe(
//         response => resolve(response),
//         err => reject(err)
//         )
//     })
//   }


//   verifyOTP(phoneNumber: string, OTP: string)
//   {
//     return this.http.get<any>(`http://localhost:8016/verifyOTP?phoneNumber=${ phoneNumber }&code=${ OTP }`);
//   }

//   getOTPVerified(phoneNumber: string, OTP: string){
//     return new Promise((resolve, reject) => {
//       this.verifyOTP(phoneNumber, OTP)
//       .subscribe(
//         response => resolve(response),
//         err => reject(err)
//       )
//     })
//   }
// }
