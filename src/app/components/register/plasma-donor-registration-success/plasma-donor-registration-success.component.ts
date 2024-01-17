import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plasma-donor-registration-success',
  templateUrl: './plasma-donor-registration-success.component.html',
  styleUrls: ['./plasma-donor-registration-success.component.css']
})
export class PlasmaDonorRegistrationSuccessComponent implements OnInit {

  constructor(private location:LocationStrategy) {
    history.pushState(null, null, window.location.href);
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
  }

  ngOnInit(): void {
  }

}
