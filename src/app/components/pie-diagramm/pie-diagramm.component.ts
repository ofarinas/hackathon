import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-pie-diagramm',
  templateUrl: './pie-diagramm.component.html',
  styleUrls: ['./pie-diagramm.component.scss']
})
export class PieDiagrammComponent implements OnInit {
  @ViewChild('chart') ref: ElementRef;
  @Input() data;

  constructor() {}

  ngOnInit() {
    this.draw();
  }

  draw() {
    var data = {
      datasets: [
        {
          data: this.dataValues,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ]
        }
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: this.dataTitles
    };

    var myPieChart = new Chart(this.ref.nativeElement, {
      type: 'pie',
      data: data,
      options: {
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
}
