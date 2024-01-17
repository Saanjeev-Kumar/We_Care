import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { HospitalService } from 'src/app/services/hospital.service';


@Component({
  selector: 'app-vaccination-registration',
  templateUrl: './vaccination-registration.component.html',
  styleUrls: ['./vaccination-registration.component.css']
})
export class VaccinationRegistrationComponent implements OnInit {

  VaccinationRegistrationData: any;

  vaccineRegistrationData: any;

  data: Array<any>;
  totalRecords: any;
  page: any = 1;

  displayedColumns: any[];
  dataSource: any;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private service: HospitalService) {
    this.data = new Array<any>()
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.service.displayVaccinationRegistrationDetails().
      then(response => {
        this.VaccinationRegistrationData = response
        this.displayedColumns = ['username', 'document','documentIdNumber', 'phoneNumber','gender','yearOfBirth' ,'state', 'district', 'postalCode']
        this.dataSource = new MatTableDataSource(this.VaccinationRegistrationData)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    .catch(error => console.log(error))
    console.log(this.VaccinationRegistrationData);
  }


   applyFilter(filterValue : any) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      }


}
