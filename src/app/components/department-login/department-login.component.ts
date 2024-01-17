import { LoginData } from './../../data';
// Admins should be able to create hositals's username and password from his dashboard

import { Component, OnInit } from '@angular/core';
import { HospitalService } from './../../services/hospital.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-department-login',
  templateUrl: './department-login.component.html',
  styleUrls: ['./department-login.component.css'],
})
export class DepartmentLoginComponent implements OnInit {
  username: any;
  password: any;
  selectedDept: any;
  selectedOption: any;
  adminValidateData: any;
  hsptlDetails: any;
  login1: boolean = false;
  login2: boolean = false;
  hide: boolean = false;
  matchPassword: boolean = false;

  hospitalName: any;
  constructor(
    private service: HospitalService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }

  adminLogin() {
    this.login1 = true;
  }

  hospitalLogin() {
    this.login2 = true;
  }

  navigate(user, pswrd) {
    if (this.login1 === true) {
      this.service.getAdminUserDetails(user).subscribe((AdminData) => {
        console.log(AdminData.token);
        console.log(AdminData.response);

        this.adminValidateData = AdminData.response;
        if (
          this.adminValidateData &&
          this.adminValidateData.password === pswrd
        ) {
          localStorage.setItem('token', AdminData.token);

          this.router.navigate(['/admin-login']);
        } else {
          //  alert('Give Valid Credential.!');
          this.matchPassword = true;
        }
      });
    }
    if (this.login2 === true) {
      this.service.getHsptlUserDetails(user).subscribe((res) => {
        this.hsptlDetails = res;
        console.log(res);
        console.log(this.hsptlDetails);
        if (this.hsptlDetails && this.hsptlDetails.password === pswrd) {
          localStorage.setItem('hospitalName', res.hospitalName);
          this.router.navigate(['/hospital-login/plasma-donors-list'])/* .then(() => {
             window.location.reload();
          }); */
        } else {
          alert('please give valid credentials');
        }
      });
    }
  }
}
