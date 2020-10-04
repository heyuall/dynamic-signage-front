import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'ngx-prod-ligne2',
  templateUrl: './prod-ligne2.component.html',
  styleUrls: ['./prod-ligne2.component.scss']
})
export class ProdLigne2Component implements OnInit {

  ///////////////
  public canvasWidth = 300
  public needleValue = 10
  public centralLabel = ''
  public name = 'Production Ligne 2'
  public bottomLabel = '10 Pièces'
  public options = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(44, 151, 222)', 'lightgray'],
      arcDelimiters: [10],
      rangeLabel: ['0', '100'],
      needleStartValue: 0,
  }
  constructor() { }

  ngOnInit(): void {
    interval(5000).pipe(
     map(i => this.getdata())
   ).subscribe(res => {
     console.log('Pieces Ligne2: '+res);
     if (this.needleValue< res && res <this.needleValue+15){
     this.needleValue= res;
     this.bottomLabel=''+res+' Pièces';
     this.options.arcDelimiters = [res];
    }
   })
   
 }
 getdata(){
   return Math.floor(Math.random()*(90-0+1)+0);
 }

}
