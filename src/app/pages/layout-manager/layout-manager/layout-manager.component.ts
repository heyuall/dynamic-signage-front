import { Component, OnInit } from '@angular/core';
// import {SmartTableComponent} from '../../tables/smart-table/smart-table.component';
import { LocalDataSource } from 'ng2-smart-table';
//import { InjiService } from '../../../services/inji.service';
import { ButtonViewComponent } from '../../button-view/button-view.component';
import { AfficheurPopupComponent } from '../afficheur-popup/afficheur-popup.component';
import { AperculayoutComponent } from '../aperculayout/aperculayout.component';

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
          type: 'list', // Used to set dropdown list from database. 
          config: {
            selectText: 'Select...',
            list: [
              {value: 'Atelier', title:'Atelier'},
              {value: 'Ligne 1', title:'Ligne 1'},
              {value: 'Ligne 2', title:'Ligne 2'},
              {value: 'Ligne 3', title:'Ligne 3'},
              {value: 'Non', title:'Non'},
            ]
            
          },
        },
        
        
      },
      footer: {
        title: 'Message',
        type: 'html',
        editor: {
          type: 'checkbox',
          config: {
            true: 'Oui',
            false: 'Non'
          },
        },
        filter: {
          type: 'checkbox',
          config: {
            true: 'Oui',
            false: 'Non',
            resetText: '',
          }
        },
      },
      button: {
        title: 'Components',
        type: 'custom',
        renderComponent: AfficheurPopupComponent,
        filter : false
      },
      button2: {
        title: 'Aperçu',
        type: 'custom',
        renderComponent: AperculayoutComponent,
        filter : false
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
      aside: "Ligne 1",
      footer: true,
    },
    {
      id: 1,
      name: "Layout2",
      main: "1x2",
      aside: "Ligne 2",
      footer: false,
    },
    {
      id: 1,
      name: "Layout3",
      main: "2x3",
      aside: "Ligne 3",
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
