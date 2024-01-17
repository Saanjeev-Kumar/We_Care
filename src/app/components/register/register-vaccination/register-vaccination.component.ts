import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../../services/register.service'

@Component({
  selector: 'app-register-vaccination',
  templateUrl: './register-vaccination.component.html',
  styleUrls: ['./register-vaccination.component.css']
})
export class RegisterVaccinationComponent implements OnInit,OnDestroy {

  phoneNumber : any = "";
  otp : any
  data : any
  value = ''
  data2 : any
  status: boolean = false
  r: string = ''
  route = "http://localhost:4200/register-vaccination"
  constructor(private registerService : RegisterService,
              private router: Router ) { }

              ngOnInit(): void {
                document.body.className = "bg-image";
              }
              ngOnDestroy(){
                document.body.className="";
              }

//   ngAfterViewInit(){
//     this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'pink';
//  }

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
              this.router.navigate(['/vaccine-registration-details'])
              localStorage.setItem('phoneNumber', this.phoneNumber)
            }else{
              this.value = '';
              alert("Enter Correct OTP")
            }
          }
        })
        .catch(err => console.log(err))
    }
  }


}
