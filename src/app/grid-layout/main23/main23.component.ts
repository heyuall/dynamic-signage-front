import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-main23',
  templateUrl: './main23.component.html',
  styleUrls: ['./main23.component.scss']
})
export class Main23Component implements OnInit {

  constructor() { 
    const el = document.getElementById('nb-global-spinner');
    if (el) {
      el.style['display'] = 'none';
    }
  }

  ngOnInit(): void {
  }

}
