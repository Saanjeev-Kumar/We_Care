import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  chart:any;

  StateData = [];
  districtData:any;
  selectedState = "Maharashtra";
  selectedDistrict: "Nagpur";
  state: any;
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  years = ["2020", "2021"];
  states = [];
  districts = [];
  stateActive = "";
  stateConfirmed = "";
  stateDeaths = "";
  stateRecovered = "";
  selectDistrict:any;
  historicalData:any;
  historicalMonth:any;
  historicalYear:any;
  readonly VAPID_PUB_KEY = "BGmodfRA5yoUKw6Q0kW4xmssJ_Tf6bIumGh-Ds5kJk3Sp5QYXqjGeFQnn6aNE3LWxNxXPB46E66Q0qwj2akI3PA"

  constructor(
    private dashboardService: DashboardServiceService,
    private swUpdate: SwUpdate,
    private swPush: SwPush
    ) { }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {

    this.dashboardService.getStates()
        .then(response => {
          for (let i = 0; i < response.states.length; i++) {
            this.states[i] = response.states[i].state;
          }
        })
        .catch(err => console.log(err));

    this.dashboardService.getStateWiseCovidData()
        .then(response => {
          console.log(response.statewise);
          this.StateData = response.statewise})
        .catch(err => console.log(err));
    this.state = this.StateData[this.selectedState];

    this.dashboardService.getDistrictWiseCovidData()
    .then(response => {
      this.districtData = response})
    .catch(err => console.log(err))

  }

  getDistricts() {
    this.districts = [];
    this.dashboardService.getStates()
      .then(response => {
        for (let i = 0; i < response.states.length; i++) {
          if (response.states[i].state == this.selectedState) {
            for (let j = 0; j < response.states[i].districts.length; j++) {
              this.districts[j] = response.states[i].districts[j];
            }
          }
        }
      })
  }

  getDataByState() {
    if (this.selectedState) {
      for (let i = 0; i < this.StateData.length; i++) {
        if (this.StateData[i].state == this.selectedState) {
          this.state = this.StateData[i];
          this.stateActive = this.state.active
          this.stateConfirmed = this.state.confirmed
          this.stateDeaths = this.state.deaths
          this.stateRecovered = this.state.recovered
        }
      }
    }
  }

  getDistrictCovidData() {
    var s = this.selectedState
    var d = this.selectedDistrict
    this.selectDistrict = this.districtData[s].districtData[d]
  }

  subscribeToNotification(){
    if(this.swUpdate.isEnabled){
      this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUB_KEY
      })
      .then(sub => {
        this.dashboardService.postSubscription(sub).subscribe();
      })
    }
  }


}
