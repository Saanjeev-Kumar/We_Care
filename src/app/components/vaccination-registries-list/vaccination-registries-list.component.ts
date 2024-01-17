import { HospitalService } from 'src/app/services/hospital.service';
import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-vaccination-registries-list',
  templateUrl: './vaccination-registries-list.component.html',
  styleUrls: ['./vaccination-registries-list.component.css']
})
export class VaccinationRegistriesListComponent implements OnInit {
  hospitalName=localStorage.getItem('hospitalName');
  selectedOption: any;
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

    this.service.vaccineRegistrationParticularHospital(this.hospitalName).
      then(response => {
        this.vaccineRegistrationData = response
        this.displayedColumns = ['username', 'document','documentIdNumber', 'phoneNumber','gender','yearOfBirth' ,'state', 'district', 'postalCode']
        this.dataSource = new MatTableDataSource(this.vaccineRegistrationData)
        this.dataSource.paginator = this.paginator;
      })
    .catch(error => console.log(error))
  }

   applyFilter(filterValue : any) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      }
}
