import { Component, OnInit } from '@angular/core';
import { MessageDataService } from '../../services/message-data.service';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'ngx-main22-aside-footer',
  templateUrl: './main22-aside-footer.component.html',
  styleUrls: ['./main22-aside-footer.component.scss']
})
export class Main22AsideFooterComponent implements OnInit {
  value : string ="flash";
  messages : any;
  
    Ligne1: { ligne: string, value: string }[] = [
    { ligne: 'Ligne 1', value: 'Arrêt Planifié' },
    { ligne: 'Ligne 1', value: 'Blockage' },
    { ligne: 'Ligne 1', value: 'En progression' },
    { ligne: 'Ligne 1', value: 'Fin série1' },
   
  ];
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

  constructor(private _data: MessageDataService , private route: ActivatedRoute,private router: Router) {
    
    const el = document.getElementById('nb-global-spinner');
    if (el) {
      el.style['display'] = 'none';
    }
  }

  ngOnInit() {
    
    this._data.getMessages().subscribe(res => this.messages = res[0].data);
  }

}
