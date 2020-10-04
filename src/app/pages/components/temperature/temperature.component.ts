import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'ngx-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
temp ;
  ///////////////
  public canvasWidth = 300
  public needleValue =20
  public centralLabel =''+20+'°'
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
     interval(5000).pipe(
      map(i => this.getdata())
    ).subscribe(res => {
      console.log(res);
      this.needleValue= res;
      this.centralLabel=''+res+'°';
    })
    
  }
  getdata(){
    return Math.floor(Math.random()*(30-25+1)+25);
  }
 

}
