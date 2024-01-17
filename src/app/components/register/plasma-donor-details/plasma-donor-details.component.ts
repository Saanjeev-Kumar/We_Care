import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-plasma-donor-details',
  templateUrl: './plasma-donor-details.component.html',
  styleUrls: ['./plasma-donor-details.component.css']
})
export class PlasmaDonorDetailsComponent implements OnInit {

  phoneNumber = localStorage.getItem('phoneNumber')
  states: any[] = []
  districts: any[] = []
  data: any
  data2: any
  data3: any
  selectedDistricts: any[] = []
  hospitalList: any[] = []
  bloodList = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']
  bool = false
  bool2 = false
  selectedHosiptal = ''
  // hospital: string

  firstName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(2)])
  lastName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(2)])
  state = new FormControl('', [Validators.required])
  district = new FormControl('', [Validators.required])
  pincode = new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(6), Validators.maxLength(6)])
  blood = new FormControl('', [Validators.required])
  
  donorDetails!: FormGroup


  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {

  }//constructor

  ngOnInit(): void {
    this.donorDetails = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      blood: this.blood,
      state: this.state,
      district: this.district,
      pincode: this.pincode
    })

  }
  ngAfterViewInit() {
    this.registerService.getStates()
      .then(response => {
        this.data = response
        for (let i = 0; i < this.data.states.length; i++) {
          this.states[i] = this.data.states[i].state;
        }
      })
      .catch(err => console.log(err))
  }

  getDistricts(keyState) {
    var count = 0;

    for (let j = 0; j < this.data.states.length; j++) {
      if (this.data.states[j].state === keyState) {
        for (let k = 0; k < this.data.states[j].districts.length; k++) {
          this.districts[count++] = this.data.states[j].districts[k];
        }
      }
    }
  }//getDistricts

  // getHospitalsData(keyDistrict) {

  //   console.log(keyDistrict)
  //   var countHospitals = 0;
  //   this.registerService.getHospitals()
  //     .then(response => {
  //       this.data2 = response;
  //       console.log(this.data2)

  //       this.selectedDistricts = this.data2.filter((hosp) => {
  //         return hosp.district === keyDistrict
  //       })
  //       console.log(this.selectedDistricts)
  //     })
  // }//getHospitalsData

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
  addDetails(key) {

    console.log("formGroup: ", this.donorDetails)

    const newPlasmaDonor = {
      phoneNumber: this.phoneNumber,
      firstName: this.donorDetails.value.firstName,
      lastName: this.donorDetails.value.lastName,
      blood: this.donorDetails.value.blood,
      state: this.donorDetails.value.state,
      district: this.donorDetails.value.district,
      pincode: this.donorDetails.value.pincode,
      hospitalName: this.selectedHosiptal
    };
    console.log(newPlasmaDonor)
    this.registerService.getAddPlasmaDonorDetails(newPlasmaDonor).subscribe((data) => {
     
    });
    this.donorDetails.reset();
    localStorage.removeItem('phoneNumber');
    this.router.navigate(['plasma-register-thankyou'])
    
   
  }//addDetails

  showHospitalListFlag(){
    document.getElementById("hospitalNamesCard").style.display = "block"
    if(this.hospitalList.length>0){
      this.bool2= true;
      this.bool=false;
     // document.getElementById("hospitalNames").style.display = "block";
    }
    else{
      this.bool= true;
      this.bool2=false;
      //document.getElementById("hospitalsNotFoundMsg").style.display = "block";
    }
    
  }
}
