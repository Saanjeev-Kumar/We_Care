import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RegisterService } from './../../../services/register.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-plasma-receival',
  templateUrl: './register-plasma-receival.component.html',
  styleUrls: ['./register-plasma-receival.component.css'],
})
export class RegisterPlasmaReceivalComponent implements OnInit, OnDestroy {
  phoneNumber: any = '';
  otp: any;
  data: any;
  value = '';
  data2: any;
  status: boolean = false;
  r: string = '';
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    document.body.className = "bg-image";
  }
  ngOnDestroy(){
    document.body.className="";
  }

  getOTP(phoneNumber: string) {
    this.registerService
      .requestOtp(phoneNumber)
      .subscribe((response) => console.log(response));
  }

  veriifyOTP() {
    if (this.phoneNumber && this.value) {
      this.registerService
        .otpVerification(this.phoneNumber, this.value)
        .then((res) => {
          console.log(res);
          this.r = res.status;
          if (this.r) {
            if (this.r === 'approved') {
              this.router.navigate(['/plasma-receiver-data']);
              localStorage.setItem('phoneNumber', this.phoneNumber);
            } else {
              this.value = '';
              alert('Enter Correct OTP');
            }
          }
        })
        .catch((err) => console.log(err));
    }
  }
}
