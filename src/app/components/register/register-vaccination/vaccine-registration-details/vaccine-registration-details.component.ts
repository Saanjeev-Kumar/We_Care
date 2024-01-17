import { RegisterService } from './../../../../services/register.service';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccine-registration-details',
  templateUrl: './vaccine-registration-details.component.html',
  styleUrls: ['./vaccine-registration-details.component.css']
})
export class VaccineRegistrationDetailsComponent implements OnInit, AfterViewInit {

  selectedHosiptal: string = ""
  data3:any
  bool: boolean = false
  bool2: boolean = false
  hospitalList:any[] = [];
  numberOfPeople = 0;
  states = [];
  districts = [];
  data: any;
  selectedState = '';
  phoneNumber = localStorage.getItem('phoneNumber')
  public documents = ["Aadhaar", "PAN Card", "Passport", "Driving Lisence"]
  readonly VAPID_PUB_KEY = "BGmodfRA5yoUKw6Q0kW4xmssJ_Tf6bIumGh-Ds5kJk3Sp5QYXqjGeFQnn6aNE3LWxNxXPB46E66Q0qwj2akI3PA"

  document = new FormControl('', [Validators.required]);
  documentIdNumber = new FormControl('', [Validators.required, Validators.maxLength(12)]);
  username = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-z]+([\s][a-zA-Z]+)+$/)]);
  gender = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  district = new FormControl('', [Validators.required]);
  yearOfBirth = new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]);
  postalCode = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]*')]);
  registrationForm!: FormGroup;


  constructor(private fb: FormBuilder,
    private dashboardService: DashboardServiceService,
    private registerService: RegisterService,
    private router: Router,
    private swUpdate: SwUpdate,
    private swPush: SwPush) {
    this.registrationForm = this.fb.group({
      username: this.username,
      gender: this.gender,
      district: this.district,
      document: this.document,
      documentIdNumber: this.documentIdNumber,
      state: this.state,
      yearOfBirth: this.yearOfBirth,
      postalCode: this.postalCode
    })
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dashboardService.getStates()
      .then(response => {
        this.data = response
        for (let i = 0; i < this.data.states.length; i++) {
          this.states[i] = this.data.states[i].state;
        }
      })
      .catch(err => console.log(err))
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

  addVaccinationDetails() {
    const newVaccinationDetail = {
      phoneNumber: this.phoneNumber,
      document: this.registrationForm.value.document,
      documentIdNumber: this.registrationForm.value.documentIdNumber,
      username: this.registrationForm.value.username,
      gender: this.registrationForm.value.gender,
      state: this.registrationForm.value.state,
      yearOfBirth: this.registrationForm.value.yearOfBirth,
      district: this.registrationForm.value.district,
      postalCode: this.registrationForm.value.postalCode,
      hospitalName: this.selectedHosiptal
    };
    console.log("VaccDetails", newVaccinationDetail)
    console.log("form", this.registrationForm)
    console.log(this.selectedHosiptal)
    this.registerService.getVaccineRegistrationDetails(newVaccinationDetail.documentIdNumber)
      .then(data1 => {
        console.log("data",data1)
        if(data1 === null){
          this.registerService.postVaccinationRegistries(newVaccinationDetail).subscribe((data) => {
            this.subscribeToNotification();
            this.numberOfPeople++;
            document.getElementById('successMsg').style.display = "block"
          },
          err => alert(err));
          this.router.navigate['/vaccine-registration-details']
          setTimeout(() => {
            document.getElementById('successMsg').style.display = "none"
          }, 3000);
        }
        else{
          alert("Enter a unique Document Id")
          this.registrationForm.reset();
        }
      })
      .catch(err => {
        console.log("err",err)
      })




    // .subscribe(data => {
    //   //console.log(this.registrationForm.value.documentIdNumber);

    //   if(data === []){

    //   }else{

    //   }
    // })

  }

  addMember(){
    if(this.numberOfPeople === 4){
      localStorage.removeItem('phoneNumber');
      this.router.navigate(['register-vaccination'])
    }
    if(this.numberOfPeople > 3){
      alert("Atmost 4 members should be added")
    }else{
      this.addVaccinationDetails();
    }
    this.registrationForm.reset();
  }

  navigate(){
    localStorage.removeItem('phoneNumber');
    this.numberOfPeople = 0;
    document.getElementById("hospitalNamesCard").style.display = "none"
    setTimeout(() => {
      this.router.navigate(['success'])
    }, 2000);
  }

  getByDistrict(keyDistrict) {
    var countHosptials =0
    this.hospitalList = []
    console.log(keyDistrict)
    this.registerService.getHospitalsByDistrict(keyDistrict)
      .subscribe((data) => {
        this.data3 = data
       console.log(data)
        for(let x=0;x<this.data3.length;x++){
          this.hospitalList[countHosptials++] = this.data3[x].hospitalName;
        }
        console.log(this.hospitalList)
      })
  }

  addHospitalName(keyName){
    this.selectedHosiptal = keyName;

  }

  showHospitalListFlag(){
    document.getElementById("hospitalNamesCard").style.display = "block"
    if(this.hospitalList.length>0){
      this.bool2= true;
      this.bool=false;
    }
    else{
      this.bool= true;
      this.bool2=false;
    }

  }

  subscribeToNotification() {
    if (this.swUpdate.isEnabled) {
      this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUB_KEY
      })
        .then(sub => {
          this.dashboardService.postSubscription(sub).subscribe();
        })
    }
  }
}
