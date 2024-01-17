import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent implements OnInit {

  constructor(private router:Router,private elementRef: ElementRef) { }
  loggedInUser:string=null;
  ngOnInit(): void {
    this.loggedInUser=localStorage.getItem('loggedInUser');
    console.log(this.loggedInUser);
    if(this.loggedInUser==''){
      this.loggedInUser=null;
    }
  }
  ngAfterViewInit(){
    /* this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'pink';*/
  }
  logout(){
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("hospitalName");
    this.router.navigate(["/department-login"]);
  }
}
