import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-prod-ligne1',
  templateUrl: './prod-ligne1.component.html',
  styleUrls: ['./prod-ligne1.component.scss']
})
export class ProdLigne1Component implements OnInit {

   ///////////////
   public canvasWidth = 300
   public needleValue = 65
   public centralLabel = ''
   public name = 'Production Ligne 1'
   public bottomLabel = '65 Pièces'
   public options = {
       hasNeedle: true,
       needleColor: 'gray',
       needleUpdateSpeed: 1000,
       arcColors: ['rgb(44, 151, 222)', 'lightgray'],
       arcDelimiters: [65],
       rangeLabel: ['0', '100'],
       needleStartValue: 50,
   }
 
   /////////////////
  constructor() { }

  ngOnInit(): void {
  }

}
