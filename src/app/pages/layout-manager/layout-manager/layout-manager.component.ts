import { Component, OnInit } from '@angular/core';
// import {SmartTableComponent} from '../../tables/smart-table/smart-table.component';
import { LocalDataSource } from 'ng2-smart-table';
//import { InjiService } from '../../../services/inji.service';
import { ButtonViewComponent } from '../../button-view/button-view.component';

@Component({
  selector: 'ngx-layout-manager',
  templateUrl: './layout-manager.component.html',
  styleUrls: ['./layout-manager.component.scss']
})
export class LayoutManagerComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus" ></i>',
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
        //valuePrepareFunction: (cell, row) => { return cell },
        editor: {
          type: 'list', // Used to set dropdown list from database. 
          config: {
            selectText: 'Select...',
            list: [
              {value: '1x2', title:'1x2'},
              {value: '2x2', title:'2x2'},
              {value: '2x3', title:'2x3'}
              
            ]
            
          },
        },
        filter: true
      },
      aside: {
        title: 'Notification',
        type: 'html',
        editor: {
          type: 'checkbox',
          config: {
            true: '<i class="fa fa-check-square"></i>',
            false: '-'
          },
        },
        filter: {
          type: 'checkbox',
          config: {
            true: '<i class="fa fa-check-square"></i>',
            false: 'No',
            resetText: '',
          }
        },
      },
      footer: {
        title: 'Message',
        type: 'html',
        editor: {
          type: 'checkbox',
          config: {
            true: '<i class="fa fa-check-square" ></i>',
            false: '-'
          },
        },
        filter: true
      },
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: ButtonViewComponent
      },
    },
    
    // rowClassFunction: (row) => {
    //   return 'ocean-st-row';  //we need this to select the 
    //   //closest parent as the class used by smart-table isnt applied directly
    // }
  };

  // source: LocalDataSource;

  data = [
    {
      id: 1,
      name: "Layout1",
      main: "2x2",
      aside: true,
      footer: true,
    },
    {
      id: 1,
      name: "Layout2",
      main: "1x2",
      aside: true,
      footer: true,
    },
    {
      id: 1,
      name: "Layout3",
      main: "2x3",
      aside: false,
      footer: false,
    }
  ];


  constructor( /*private InjiService: InjiService*/) {
    // this.source = new LocalDataSource(this.data); // create the source
    console.log(this.data);

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Etes vous sûr de supprimer?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
