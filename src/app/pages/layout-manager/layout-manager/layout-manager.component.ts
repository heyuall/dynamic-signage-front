import { Component, OnInit } from '@angular/core';
// import {SmartTableComponent} from '../../tables/smart-table/smart-table.component';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-layout-manager',
  templateUrl: './layout-manager.component.html',
  styleUrls: ['./layout-manager.component.scss']
})
export class LayoutManagerComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {

      name: {
        title: 'Nom',
        filter: true
      },
      main: {
        title: 'Main',
        type: 'html',
        editor: {
          type: 'list', // Used to set dropdown list from database. 
          config: {
            list: [

            ],
          },
        },
        filter: true
      },
      aside: {
        title: 'Notification',
        type: 'html',
        editor: {
          type: 'checkbox',
          config: true,
        },
        filter: false
      }
    }
  };

  source: LocalDataSource;
  data: [];

  constructor() {
    this.source = new LocalDataSource(this.data); // create the source
  }



}
