
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-registration-for-hospital',
  templateUrl: './registration-for-hospital.component.html',
  styleUrls: ['./registration-for-hospital.component.css'],
})
export class RegistrationForHospitalComponent implements OnInit, AfterViewInit{
data:any;
states:any[]=[];
districts:any[]=[];
hide: boolean = false;

  username = new FormControl('', [
    Validators.required,
    Validators.email,
]);
    password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/),
  ]);
  confirmPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  hospitalName = new FormControl('', [Validators.required,
  Validators.pattern(/^[a-zA-z]+([\s][a-zA-Z]+)+$/)]);
  state = new FormControl('', [Validators.required]);
  district = new FormControl('', [Validators.required]);
  postalCode = new FormControl('', [Validators.required,Validators.pattern(/^[0-9]+$/)]);
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: HospitalService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
      hospitalName:this.hospitalName,
      state:this.state,
      district:this.district,
      postalCode:this.postalCode
    },
    {
      validator: this.matchPassword('password', 'confirmPassword'),
    });
  }
  matchPassword(pasword: string, confrmPswd: string) {
    return (formGroup: FormGroup) => {
      const pswd = formGroup.controls[pasword];
      const cnfrmPswd = formGroup.controls[confrmPswd];
      if (pswd.value !== cnfrmPswd.value) {
        cnfrmPswd.setErrors({ passwordNotMatch: true });
      } else {
        cnfrmPswd.setErrors(null);
      }
    };
  }

  ngAfterViewInit(){
    this.service.getStates()
        .then(response => { this.data = response
          console.log(this.data);
          for (let i = 0; i < this.data.states.length; i++) {
            this.states[i] = this.data.states[i].state;
            }})
        .catch(err => console.log(err))
  }

  getDistricts(val){
    var p = 0;
    if(val){
      for (let j = 0; j < this.data.states.length; j++) {
        if (this.data.states[j].state === val) {
          for (let k = 0; k < this.data.states[j].districts.length; k++) {
            this.districts[p] = this.data.states[j].districts[k];
            p++;
          }
        }
      }
    }
  }

  addHospitalDetail() {
    const newContact = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      hospitalName:this.registerForm.value.hospitalName,
      state:this.registerForm.value.state,
      district:this.registerForm.value.district,
      postalCode:this.registerForm.value.postalCode
    };
    this.service.addHospitalDetails(newContact).subscribe((data) => {
     /*  alert('Successfully registered for hospital'); */
     document.getElementById('successMessage').style.display="block";
    });
    this.registerForm.reset();
    setTimeout(() => {
      document.getElementById('successMessage').style.display="none";
    }, 3000);
  }

  logout() {
    this.router.navigate(['/admin-login']);
  }
  ngOnInit(): void {}
}
