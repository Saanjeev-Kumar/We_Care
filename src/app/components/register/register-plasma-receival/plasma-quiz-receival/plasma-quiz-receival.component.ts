import { Router } from '@angular/router';
import { RegisterServiceService } from './../../services/register-service.service';
import { RegisterService } from './../../../../services/register.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-plasma-quiz-receival',
  templateUrl: './plasma-quiz-receival.component.html',
  styleUrls: ['./plasma-quiz-receival.component.css'],
})
export class PlasmaQuizReceivalComponent implements OnInit {
  phoneNumber = localStorage.getItem('phoneNumber');
  username = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z ]*$'),
    Validators.minLength(6),
  ]);
  age = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]*$'),
    Validators.min(18),
    Validators.max(65),
  ]);
  blood = new FormControl('', [Validators.required]);
  bloodList: any = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];

  gender = new FormControl('', Validators.required);

  // Admitted=new FormControl(false);

  state = new FormControl('', Validators.required);
  district = new FormControl('', Validators.required);
  pincode = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{6}$'),
  ]);

  hospital = new FormControl('', [Validators.required]);

  registerForm: FormGroup;
  userDetails: any[] = [];
  data: any;
  states: any[] = [];
  districts: any[] = [];
  plasmaDonorDetails: any[] = [];
  matchedDonor: any[] = [];
  // boolean:boolean=false;
  bool1: boolean = false;
  bool2: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: RegisterService,
    private registerService: RegisterServiceService,
    private router: Router,
    private location:LocationStrategy
  ) {
    this.registerForm = this.fb.group({
      username: this.username,
      age: this.age,
      blood: this.blood,
      gender: this.gender,
      // Admitted:this.Admitted,
      // city:this.city,
      state: this.state,
      district: this.district,
      pincode: this.pincode,
      hospital: this.hospital,
    });
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.registerService
      .getStates()
      .then((response) => {
        this.data = response;
        for (let i = 0; i < this.data.states.length; i++) {
          this.states[i] = this.data.states[i].state;
        }
      })
      .catch((err) => console.log(err));
  }

  getDistricts(val: string) {
    var p = 0;
    if (val) {
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

  onRegisterUserDetails() {
    const data = {
      phoneNumber: this.phoneNumber,
      username: this.registerForm.value.username,
      age: this.registerForm.value.age,
      blood: this.registerForm.value.blood,
      gender: this.registerForm.value.gender,
      state: this.registerForm.value.state,
      district: this.registerForm.value.district,
      pincode: this.registerForm.value.pincode,
      hospital: this.registerForm.value.hospital,
    };
    this.service.onRegisterUserDetails(data).subscribe((d) => {
      alert('sucessfully register the data');
      this.userDetails.push(d);
    });
  }

  getPlasmaDonorDetails() {
    var k = 0;

    this.service.onRegisterDonarDetaills(this.district.value).subscribe((d) => {
      this.plasmaDonorDetails = d;
       console.log(d);
      for (let i = 0; i < d.length; i++) {
        if (d[i].blood === this.blood.value) {
          this.matchedDonor[k] = d[i];
          k++;
        }
      }
      console.log(this.matchedDonor);
      this.showDetails();
      this.registerForm.reset();
      localStorage.removeItem('phoneNumber');
    });
  }
  showDetails() {
    document.getElementById('result').style.display = 'block';
    if (this.matchedDonor.length > 0) {
      this.bool2 = true;
      this.bool1 = false;
    } else {
      this.bool1 = true;
      this.bool2 = false;
    }
  }
  nextPage(){
    this.router.navigate(['registered']);
  }
}
