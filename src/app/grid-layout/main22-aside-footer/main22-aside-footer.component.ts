import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-main22-aside-footer',
  templateUrl: './main22-aside-footer.component.html',
  styleUrls: ['./main22-aside-footer.component.scss']
})
export class Main22AsideFooterComponent implements OnInit {

  constructor() { 
    const el = document.getElementById('nb-global-spinner');
    if (el) {
      el.style['display'] = 'none';
    }
  }

  ngOnInit(): void {
  }

}
