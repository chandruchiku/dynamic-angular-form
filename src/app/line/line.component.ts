import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-plugin-dragdata';
import * as sampleData from '../../assets/data.json';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit, AfterViewInit {

  @ViewChild('myChart', {static: false}) canvas: ElementRef;

  public chartInstance: Chart;
  public context: CanvasRenderingContext2D;
  public data: any = (sampleData as any).default;


  public timeInterval: any[];

  public options: any = {
    type: 'line',
    data: {
      labels: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30'],
      datasets: [
        {
          name: 'callvolume',
          label: 'Call Volume',
          data: [120, 190, 30, 50, 20, 30],
          borderWidth: 1,
          borderColor: '#3cba9f',
          fill: false
        },
        {
          name: 'aht',
          label: 'AHT',
          data: [7, 11, 5, 8, 3, 7],
          borderWidth: 1,
          borderColor: '#ffcc00',
          fill: false
        }
      ]
    },
    options: {
      dragDataRound: 0,
      dragData: true,
      scales: {
        yAxes: [{
          ticks: {
            reverse: false
          }
        }]
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.loadChart();
  }

  public loadChart() {
    this.options.data.labels = this.data.map(x => x.TimeInterval);
    this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
    this.chartInstance = new Chart(this.context, this.options);
  }

  public setLineColor(lineIdentifier: string, color: string){
    this.chartInstance.update();
  }

}