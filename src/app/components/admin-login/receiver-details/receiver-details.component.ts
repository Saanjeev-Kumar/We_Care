import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { HospitalService } from 'src/app/services/hospital.service';


@Component({
  selector: 'app-receiver-details',
  templateUrl: './receiver-details.component.html',
  styleUrls: ['./receiver-details.component.css']
})
export class ReceiverDetailsComponent implements OnInit {

  plasmaReceiverData: any;

  data: Array<any>;
  totalRecords: any;
  page: any = 1;
  displayedColumns: any[];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router: Router, private service: HospitalService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    this.service.displayPlasmaReceiverDetails()
      .then(response => {
        this.plasmaReceiverData = response
        this.displayedColumns = ['username', 'phoneNumber', 'age', 'blood', 'gender', 'city', 'hospital']
        this.dataSource = new MatTableDataSource(this.plasmaReceiverData)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    .catch(error => console.log(error)
    )
  }
  applyFilter(filterValue : any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
