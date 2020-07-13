import { LocalDataSource } from 'ng2-smart-table';
import { Component, OnInit } from '@angular/core';
import{LayoutPopupComponent}from '../layout-popup/layout-popup.component';

import { Type } from '@angular/core';

@Component({
  selector: 'ngx-afficheur',
  templateUrl: './afficheur.component.html',
  styleUrls: ['./afficheur.component.scss']
})
export class AfficheurComponent {

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
      reference: {
        title: 'Reference',
        filter: true
      },
      // affect: {
      //   title: 'Affecter Layout',
      //   type: 'html',
      //   editor: {
      //     type: 'list', // Used to set dropdown list from database. 
      //     config: {
      //       list: [


      //       ],
      //     },
      //   },
      //   filter: true
      // },
      Layout : {
        title: 'Affecter Layout',
        type: 'custom',
        renderComponent: LayoutPopupComponent,
        filter: false
      },
    }
  };

  
  data = [
    {
      id : 1, 
      name : "afficheur1",
      reference: "ref1",
      Layout: "layout1"
    },
    {
      id : 2,
      name : "afficheur2",
      reference: "ref2",
      Layout: "layout1"
    },
    {
      id : 3,
      name : "afficheur3",
      reference: "ref3",
      Layout: "layout1"
    },
  ];

  constructor() {
    // this.source = this.data; // create the source
  }






  onDeleteConfirm(event): void {
    if (window.confirm('Etes vous sûr de supprimer?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }


  }
}
