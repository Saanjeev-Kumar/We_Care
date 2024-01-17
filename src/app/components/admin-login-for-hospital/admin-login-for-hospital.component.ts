import { HospitalService } from './../../services/hospital.service';
import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-login-for-hospital',
  templateUrl: './admin-login-for-hospital.component.html',
  styleUrls: ['./admin-login-for-hospital.component.css']
})
export class AdminLoginForHospitalComponent implements OnInit {
  plasmaDonorData: any;
  selectedOption: any;
  vaccineRegistrationData: any;

  data: Array<any>;
  totalRecords: any;
  page: any = 1;

  displayedColumns: any[];
  dataSource: any;

  hospitalDetails: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,private service:HospitalService) { }

  ngOnInit(): void {
  // this.service.getHsptlUserAllDetails().subscribe(data=>{
  //   this.hospitalDetails=data;
  // })
  }

  ngAfterViewInit(): void {

    this.service.displayHsptlUserAllDetails().
      then(response => {
        this.hospitalDetails = response
        this.displayedColumns = ['username', 'password', 'hospitalName', 'state', 'district', 'postalCode','delete']
        this.dataSource = new MatTableDataSource(this.hospitalDetails)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
    .catch(error => console.log(error))
    console.log(this.hospitalDetails);
  }

  applyFilter(filterValue : any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    }


  onDelete(username:any){
    this.service.deleteHospitalDetails(username).subscribe(data=>{
        window.location.reload();
      console.log(this.hospitalDetails);
    })
  }
}
