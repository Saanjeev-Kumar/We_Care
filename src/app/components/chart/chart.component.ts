import { HospitalService } from 'src/app/services/hospital.service';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatHint } from '@angular/material/form-field';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';
import { RegisterService } from 'src/app/services/register.service.js';
import { Chart, registerables } from '../../../../node_modules/chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {

  @Input() public parentData;
  chart: any;
  historicalData: any;
  historicalMonth: any;
  historicalYear: any;
  recovered = []
  confirmed = []
  deaths = []
  dayList = []
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  years = ["2020", "2021"];

  vaccineRegistries:any = []
  plasmaDonors:any = []
  plasmaReceivers:any = []

  noOfvaccineRegistries: number
  noOfplasmaDonors: number
  noOfplasmaReceivers : number

  covidData: any
  Indiandata: any
  totalCases: number
  totalDeaths: number
  totalRecovered: number
  totalActive: number

  //

  constructor(private dashboardService: DashboardServiceService, private registerService:HospitalService) { }

  ngOnInit(): void {

    var resOne, resTwo, resThree
    this.registerService.displayVaccinationRegistrationDetails()
    .then((res1:[]) => {
      resOne = res1.length
      console.log("Vaccine Reg",resOne)
    })
    .catch(err => console.log(err))

    this.registerService.displayPlasmaReceiverDetails()
      .then((res2:[]) => {
        resTwo = res2.length
      })
      .catch(err => console.log(err))

      this.registerService.displayPlasmaDonationDetail()
    .then((res3:[]) => {
      resThree = res3.length
      this.displayPieChart(resOne,resTwo, resThree)
     })
    .catch(err => console.log(err))





    this.dashboardService.getAllCovidData()
      .then(response => {
        this.covidData = response
        console.log(this.covidData)
        for (let m = 0; m < this.covidData.length; m++) {
          if (this.covidData[m].country === "India") {
            this.totalCases = this.covidData[m].cases;
            console.log("afterview init",this.totalCases);
            this.totalActive = this.covidData[m].active;
            this.totalRecovered = this.covidData[m].recovered;
            this.totalDeaths = this.covidData[m].deaths;
          }
        }
        this.getPieData(this.totalActive,this.totalRecovered,this.totalDeaths);
      })
      .catch(err => console.log(err))

    this.dashboardService.getStateWiseHistoricalData()
      .then(response => {
        this.historicalData = response
        // this.getHistoricalData(this.historicalData);
      })
      .catch(err => console.log(err))

    Chart.register(...registerables);


  }

  ngAfterViewInit() {

    const data = {
      labels: this.dayList,
      datasets: [
        {
          label: 'Confirmed',
          data: this.confirmed,
          borderColor: 'red',
          hoverOffset: 4
          // backgroundColor: 'green',
        },
        {
          label: 'Recovered',
          data: this.recovered,
          borderColor: 'blue',
          hoverOffset: 4
          //backgroundColor: 'yelllow',
        },
        {
          label: "Deaths",
          data: this.deaths,
          borderColor: 'cyan',
          hoverOffset: 4
          //backgroundColor: 'orange',
        },

      ]
    };

    const myChart = new Chart("myChart", {
      type: 'line',
      data: data,
      options: {
        layout: {
          padding: 20
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Covid Situation in India'
          }
        }
      },
    });

  }//ngAfterViewInit

  getPieData(activeCases, recoveredCases, deathCases){
    console.log("In Get Pie Data: " ,activeCases)
    const pieData = {
      labels: ['Active', 'Recovered', 'Deaths'],
      datasets: [
        {
          label: 'India Covid Cases',
          data: [activeCases, recoveredCases, deathCases],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 99, 132)'
          ],
          hoverOffset: 4
          // backgroundColor: 'green',
        },

      ]
    };
    const myPieChart = new Chart("myPieChart", {
      type: 'pie',
      data: pieData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title:{
          display: true,
          text: "India Covid Cases"
        }
    }
    });

  }//getPieData

  displayPieChart(vaccineRegistries, plasmaDonors, plasmaReceivers ){
    console.log("Registrations",vaccineRegistries, plasmaDonors, plasmaReceivers);

    const guageData = {
      labels: [  'Vaccine Registrations','Plasma Receivers','Plasma Donors'],
      datasets: [
        {
          label: 'Registered data',
          data: [vaccineRegistries ,plasmaDonors, plasmaReceivers],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 99, 132)'
          ],
          hoverOffset: 4
          // backgroundColor: 'green',
        },

      ]
    };
    const guageChart = new Chart("guageChart", {
      type: 'doughnut',
      data: guageData,
      options: {
        circumference: Math.PI,
        rotation: Math.PI,
        cutoutPercentage: 75,
        responsive: true,
        maintainAspectRatio: false,
        title:{
          display: true,
          text: "Number of Registries"
        }
    }
    });
  }



  getHistoricalData() {
    //console.log("Historical", this.historicalData)
    var k = 0;
    var c = 0;
    var data = [];
    var days = [];
    // var dayList = [];
    // var confirmed = [];
    // var recovered = [];
    // var deaths = [];
    var intmonth = this.months.indexOf(this.historicalMonth);
    var str = this.historicalYear + '-' + ('0' + (intmonth + 1)).slice(-2)
    var re = new RegExp(str)
    for (let i = 0; i < this.historicalData.data.length; i++) {
      if (this.historicalData.data[i].day.match(re)) {
        days[i] = this.historicalData.data[i].day
      }
      if (this.historicalData.data[i].day.match(re))
        for (let p = 0; p < this.historicalData.data[i].regional.length; p++) {
          if (this.historicalData.data[i].regional[p].loc === this.parentData) {
            data[k] = this.historicalData.data[i].regional[p];
            k++
          }
        }
    }
    for (let q = 0; q < days.length; q++) {
      if (days[q]) {
        this.dayList[c] = days[q];
        c++;
      }
    }
    for (let r = 0; r < data.length; r++) {
      this.confirmed[r] = data[r].confirmedCasesIndian
      this.recovered[r] = data[r].discharged
      this.deaths[r] = data[r].deaths
    }
    console.log("R", this.recovered);
    console.log("D", this.deaths);
    console.log("C", this.confirmed);
    console.log(this.dayList);

  }


}
