import { Component, OnInit } from '@angular/core';
import { ComponentDataService } from '../../../services/component-data.service';
import { ChartComponent } from '../../../models/ChartComponent';
import { Observable, Subject } from "rxjs";

@Component({
  selector: 'ngx-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor(private componentDataService: ComponentDataService) { }

  //chartComponents:any[]=[];
  chartComponent: ChartComponent = new ChartComponent();
  chartComponents: ChartComponent[];
  gaugeType = "semi";
  gaugeValue = 28.3;
  gaugeLabel = "pièces";
  gaugeAppendText = "%";
  size=300;
  cap = "round";
  

  ///////////////
  public canvasWidth = 300
  public needleValue = 65
  public centralLabel = ''
  public name = 'Gauge chart'
  public bottomLabel = '65'
  public options = {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(44, 151, 222)', 'lightgray'],
      arcDelimiters: [30],
      rangeLabel: ['0', '100'],
      needleStartValue: 50,
  }

  /////////////////

  ngOnInit(): void {


    this.componentDataService.initComponentList().subscribe(
      (data) => {
        this.componentDataService.getComponentList().subscribe((data: ChartComponent[]) => {
          console.log(data);
          this.chartComponents = data
        });

      }
    );
    // this.chartComponents.forEach(elt=>)
}




}
