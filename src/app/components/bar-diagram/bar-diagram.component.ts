import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-bar-diagram',
  templateUrl: './bar-diagram.component.html',
  styleUrls: ['./bar-diagram.component.scss']
})
export class BarDiagramComponent implements OnInit {
  @ViewChild('chart') barRef: ElementRef;
  @Input() data;

  constructor() {}

  ngOnInit() {
    this.draw();
  }

  draw() {
    const myChart = new Chart(this.barRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.dataTitles,
        datasets: [
          {
            label: '# of Votes',
            data: this.dataValues,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: this.dataColors,
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      }
    });
  }

  get dataValues() {
    return this.data ? this.data.map(x => x.value) : [];
  }

  get dataTitles() {
    return this.data ? this.data.map(x => x.title) : [];
  }

  get dataColors() {
    const getColor = color => {
      if (color.indexOf(',') > -1) {
        return `rgb(${color})`;
      } else return color;
    };
    return this.data
      ? this.data.map(x => {
          return getColor(x.color);
        })
      : [];
  }
}
