import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit, AfterViewInit {


  plasmaDonorData: any;
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

    this.service.displayPlasmaDonationDetail().
      then(response => {
        this.plasmaDonorData = response
        console.log(this.plasmaDonorData);
        this.displayedColumns = ['firstName', 'lastName', 'phoneNumber', 'state', 'district', 'pincode']
        this.dataSource = new MatTableDataSource(this.plasmaDonorData)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
    .catch(error => console.log(error))
    console.log(this.plasmaDonorData);
  }


   applyFilter(filterValue : any) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      }



}

