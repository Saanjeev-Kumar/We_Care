import { LocationStrategy } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../../services/register.service'


@Component({
  selector: 'app-register-plasma-donation',
  templateUrl: './register-plasma-donation.component.html',
  styleUrls: ['./register-plasma-donation.component.css']
})
export class RegisterPlasmaDonationComponent implements OnInit,OnDestroy {

  phoneNumber : any = "";
  otp : any
  data : any
  value = ''
  data2 : any
  status: boolean = false
  r: any = ''
  constructor(private registerService : RegisterService, private router: Router, private location:LocationStrategy) {
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }

  ngOnInit(): void {
    document.body.className = "bg-image";
  }
  ngOnDestroy(){
    document.body.className="";
  }

  getOTP(phoneNumber:string){

    this.registerService.requestOtp(phoneNumber)
      .subscribe(response => console.log(response))

  }

  veriifyOTP(){

    if(this.phoneNumber && this.value){
      this.registerService.otpVerification(this.phoneNumber,this.value)
          .then(res => {
            this.r = res.status
            if(this.r){
              if(this.r === 'approved'){
                this.router.navigate(['/plasma-donor-details'])
                localStorage.setItem('phoneNumber', this.phoneNumber)
              }else{
                this.value = '';
                alert("Enter Correct OTP")
              }
            }
          })
          .catch(err => console.log(err))
      }

  }//veriifyOTP




}
