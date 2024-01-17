import { HospitalService } from 'src/app/services/hospital.service';
import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-plasma-donors-list',
  templateUrl: './plasma-donors-list.component.html',
  styleUrls: ['./plasma-donors-list.component.css']
})
export class PlasmaDonorsListComponent implements OnInit {
  hospitalName=localStorage.getItem('hospitalName');
  plasmaDonorsData: any;
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

    this.service.plasmaDonorsParticularHospital(this.hospitalName).
      then(response => {
        console.log("Response"+response);
        this.plasmaDonorsData = response
        this.displayedColumns = ['firstName', 'lastName', 'blood', 'phoneNumber','hospitalName','state', 'district', 'pincode']
        this.dataSource = new MatTableDataSource(this.plasmaDonorsData)
        this.dataSource.paginator = this.paginator;
      })
    .catch(error => console.log(error))
    console.log(this.plasmaDonorsData);
  }

   applyFilter(filterValue : any) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      }

}

