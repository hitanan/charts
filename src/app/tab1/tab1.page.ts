import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;

  constructor(private http: HttpClient) { 

  }

  ionViewDidLoad() {

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data : {}[]) => {
      var xData = data.map(e => e['address']['geo']['lng']);
      var labelsData = data.map(e => e['username']);

      var chartData = {
        labels: labelsData,
        datasets: [{
            label: 'Temperature',
            data: xData,
            borderWidth: 1
        }]
      };

      this.barChart = new Chart(this.barCanvas.nativeElement, {
        type: 'line',
        showTooltips: false,
        data: chartData,
        maintainAspectRatio: false,
        responsive: true,
        options: {
          events: false,
          hover: {
              animationDuration: 0
          },
          animation : {
            duration: 1,
            onComplete: function () {
              var chartInstance = this.chart,
                  ctx = chartInstance.ctx;
              ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';
              ctx.fillStyle = "black";
              this.data.datasets.forEach(function (dataset, i) {
                  var meta = chartInstance.controller.getDatasetMeta(i);
                  meta.data.forEach(function (bar, index) {
                      var data = dataset.data[index];                            
                      ctx.fillText(data, bar._model.x, bar._model.y - 5);
                  });
              });
            },  
          },
          tooltips: {
            enabled: false,
            titleFontSize: 0,
            titleMarginBottom: 0,
            bodyFontSize: 12
          },
          title:{
            text: "Temperature",
            position: "top",
            display: true
          },
          legend: {
            horizontalAlign: "right",
            verticalAlign: "center",
            position: "top"
          },
          scales: {
              xAxes: [{
                  ticks: {
                      fontSize: 12,
                      display: true
                  }
              }],
              yAxes: [{
                  ticks: {
                      fontSize: 12,
                      beginAtZero: true,
                      display: true
                  }
              }]
          },
          responsive: false
          
        }

      });

    });
  }
  ngOnInit(): void {
    this.ionViewDidLoad();
   
  }
}
