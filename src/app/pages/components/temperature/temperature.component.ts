import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  ///////////////
  public canvasWidth = 300
  public needleValue = 30
  public centralLabel = '30'
  public name = 'Température'
  public bottomLabel = ''
  public options = {
      hasNeedle: true,
      needleColor: 'black',
      needleUpdateSpeed: 1000,
      arcColors: ['green','yellow','rgb(252, 86, 3)'],
      arcDelimiters: [35,60],
      rangeLabel: ['0', '100'],
      needleStartValue: 50,
      centralLabel: ''
  }

  /////////////////

  constructor() { }

  ngOnInit(): void {
  }

}
