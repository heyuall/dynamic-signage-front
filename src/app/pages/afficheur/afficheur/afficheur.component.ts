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
      affect: {
        title: 'Affecter Layout',
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
      button: {
        title: 'Button',
        type: 'custom',
        renderComponent: LayoutPopupComponent
      },
    }
  };

  source: LocalDataSource;
  data: [];

  constructor() {
    this.source = new LocalDataSource(this.data); // create the source
  }






  onDeleteConfirm(event): void {
    if (window.confirm('Etes vous sûr de supprimer?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }


  }
}
