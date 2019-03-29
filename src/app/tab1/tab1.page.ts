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
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
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
