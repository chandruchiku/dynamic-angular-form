import { Component, OnInit } from '@angular/core';
import { PaletteSettings } from '@progress/kendo-angular-inputs';
import { FormBuilder, FormGroup, FormArray, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chart-context-item',
  templateUrl: './chart-context-item.component.html',
  styleUrls: ['./chart-context-item.component.css']
})
export class ChartContextItemComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {
    this.demoForm = this._formBuilder.group({
      demoArray: this._formBuilder.array([])
   });
  }
  public selected = '#fe413b';
  public palette: Array<string> = [ '#000000', '#7f7f7f', '#880015', '#ed1c24', '#ff7f27', '#fff200', '#22b14c', '#00a2e8', '#3f48cc', '#a349a4' ];

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

  public settings: PaletteSettings = {
    palette: this.palette,
    tileSize: 20
  };

  demoForm: FormGroup;

  public onChange(color: string, id: string): void {
    const itemIndex = this.insightItems.findIndex(x => x.Id === id);
    this.insightItems[itemIndex].Color = color;
  }

  public getRandomColor() {
    return this.palette[Math.floor(Math.random() * 10)];
  }

  ngOnViewInit() {
    this.demoForm.valueChanges.subscribe(selectedValue  => {
      console.log('form value changed');
      console.log(selectedValue);
    });
  }

  ngOnInit() {    
  }

}
