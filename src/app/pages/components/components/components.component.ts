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

  ngOnInit(): void {


    this.componentDataService.initComponentList().subscribe(
      (data) => {
        this.componentDataService.getComponentList().subscribe((data: ChartComponent[]) => {
          console.log(data);
          this.chartComponents = data
        });

      }
    );
}




}
