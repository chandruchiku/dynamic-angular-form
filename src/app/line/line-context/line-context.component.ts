import { Component, OnInit } from '@angular/core';
import { PaletteSettings } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'app-line-context',
  templateUrl: './line-context.component.html',
  styleUrls: ['./line-context.component.css']
})
export class LineContextComponent implements OnInit {

  public insightItems  = [
    {
      Id: 'CallVolume',
      Name: 'Call Volume',
      Type: 'line',
      Color: '#000000'
    },
    {
      Id: 'aht',
      Name: 'AHT',
      Type: 'line',
      Color: '#000000'
    },
    {
      Id: 'shrinkage',
      Name: 'Shrinkage',
      Type: 'line',
      Color: '#000000'
    },
    {
      Id: 'slGoal',
      Name: 'SL Goal',
      Type: 'line',
      Color: '#000000'
    },
    {
      Id: 'requiredAdj',
      Name: 'Required ADJ',
      Type: 'line',
      Color: '#000000'
    },
    {
      Id: 'scheduledStaff',
      Name: 'Scheduled Staff',
      Type: 'line',
      Color: '#000000'
    },
    {
      Id: 'netStaff',
      Name: 'Net Staffing',
      Type: 'line',
      Color: '#000000'
    },
    {
      Id: 'forecastSL',
      Name: 'Forecast SL',
      Type: 'line',
      Color: '#000000'
    },
    {
      Id: 'scheduledStaffWA',
      Name: 'Scheduled Staff W/Adj',
      Type: 'line',
      Color: '#3f48cc'
    },
    {
      Id: 'netStaffWA',
      Name: 'Net Staffing W/Adj',
      Type: 'line',
      Color: '#a349a4'
    },
  ];


  constructor() {}

  ngOnInit() {}
}
