import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-prod-ligne3',
  templateUrl: './prod-ligne3.component.html',
  styleUrls: ['./prod-ligne3.component.scss']
})
export class ProdLigne3Component implements OnInit {

  ///////////////
  public canvasWidth = 300
  public needleValue = 80
  public centralLabel = ''
  public name = 'Production Ligne 3'
  public bottomLabel = '80 Pièces'
  public options = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(44, 151, 222)', 'lightgray'],
      arcDelimiters: [80],
      rangeLabel: ['0', '100'],
      needleStartValue: 50,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
