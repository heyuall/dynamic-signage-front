import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-main22',
  templateUrl: './main22.component.html',
  styleUrls: ['./main22.component.scss']
})
export class Main22Component implements OnInit {

  constructor() {
    const el = document.getElementById('nb-global-spinner');
    if (el) {
      el.style['display'] = 'none';
    }
   }

  ngOnInit(): void {
  }

}
