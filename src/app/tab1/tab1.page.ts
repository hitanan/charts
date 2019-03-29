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
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'line',
      data: {
          labels: [
            "Red", "Blue", "Yellow", "Green", "Purple", "Orange",
            "Red", "Blue", "Yellow", "Green", "Purple", "Orange",
            "Red", "Blue", "Yellow", "Green", "Purple", "Orange",
            "Red", "Blue", "Yellow", "Green", "Purple", "Orange",
            "Red", "Blue", "Yellow", "Green", "Purple", "Orange",
            "Red", "Blue", "Yellow", "Green", "Purple", "Orange"
          ],
          datasets: [{
              label: '# of Votes',
              data: [
                12, 19, 3, 5, 2, 3,
                12, 19, 3, 5, 2, 3,
                12, 19, 3, 5, 2, 3,
                12, 19, 3, 5, 2, 3,
                12, 19, 3, 5, 2, 3,
                12, 19, 3, 5, 2, 3
              ],
              borderWidth: 1
          }]
      },
      maintainAspectRatio: false,
      responsive: true,
      options: {
        tooltips: {
          titleFontSize: 0,
          titleMarginBottom: 0,
          bodyFontSize: 12
      },
      title:{
        text: "Try Zooming And Panning"
      },
      legend: {
        horizontalAlign: "right",
        verticalAlign: "center"
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
  }
  ngOnInit(): void {
    this.ionViewDidLoad();
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((response) => {
      console.log(response);
    });
  }
}
