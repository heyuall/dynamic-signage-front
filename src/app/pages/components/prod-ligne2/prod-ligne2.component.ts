import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-prod-ligne2',
  templateUrl: './prod-ligne2.component.html',
  styleUrls: ['./prod-ligne2.component.scss']
})
export class ProdLigne2Component implements OnInit {

  ///////////////
  public canvasWidth = 300
  public needleValue = 45
  public centralLabel = ''
  public name = 'Production Ligne 2'
  public bottomLabel = '45 Pièces'
  public options = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(44, 151, 222)', 'lightgray'],
      arcDelimiters: [45],
      rangeLabel: ['0', '100'],
      needleStartValue: 50,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
