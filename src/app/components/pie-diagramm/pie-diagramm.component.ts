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
    this.ref.nativeElement
      .getContext('2d')
      .clearRect(
        0,
        0,
        this.ref.nativeElement.width,
        this.ref.nativeElement.height
      );
    console.log(this.dataColors);
    var data = {
      datasets: [
        {
          data: this.dataValues,
          backgroundColor: this.dataColors,
          borderColor: this.dataColors
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
