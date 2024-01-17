import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { HospitalService } from 'src/app/services/hospital.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  plasmaReceiverData: any;
  plasmaDonorData: any;
  checked: boolean = false;
  button: any
  vaccineRegistrationData: any;

  data: Array<any>;
  totalRecords: any;
  page: any = 1;

  displayedColumns: any[];
  VaccineDisplayedColumns: any[];
  dataSource: any;

  dataSourceVaccination: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private service: HospitalService) {
    this.data = new Array<any>()
  }



  ngOnInit(): void {
  }



  vaccinationregistrationDetails() {
    this.service.getvaccinationRegistrationDetails().subscribe((vaccineRgistration) => {
      this.vaccineRegistrationData = vaccineRgistration;
      this.totalRecords = vaccineRgistration.length;
    })
    this.VaccineDisplayedColumns  = ['username','phoneNumber','gender','document','documentIdNumber','yearofBirth','state','district','postalCode'];
    this.dataSourceVaccination =new MatTableDataSource(this.vaccineRegistrationData);
  }
  applyVaccineFilter(filterValue : any) {
    this.dataSourceVaccination.filter = filterValue.trim().toLowerCase();
  }






  plasmaDonationDetails() {
    this.service.getPlasmaDonationDetails().subscribe((PlasmaData) => {
      this.plasmaDonorData = PlasmaData;
      console.log(this.plasmaDonorData);
    })
  //   this.displayedColumns  = ['firstName','lastName','phoneNumber','state','district','pincode'];
  //   this.dataSource =new MatTableDataSource(this.plasmaDonorData);
  //  }
  //  applyFilter(filterValue : any) {
  //    this.dataSource.filter = filterValue.trim().toLowerCase();
   }


  plasmaReceiverDetails() {
    this.service.getPlasmaReceiverDetails().subscribe((receiverData) => {
      this.plasmaReceiverData = receiverData;
    })
  }






  registerForHospital(){
    this.router.navigate(['/registration-for-hospital']);
  }
  adminloginforHospital(){
    this.router.navigate(['/registered-hospital']);
  }

  logoutAdmin() {
    this.service.logoutUser();
  }

  logout(){
    this.router.navigate(["/department-login"]);
  }

}
