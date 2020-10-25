import { Component, OnInit } from '@angular/core';
// import {SmartTableComponent} from '../../tables/smart-table/smart-table.component';
import { LocalDataSource } from 'ng2-smart-table';
//import { InjiService } from '../../../services/inji.service';
import { ButtonViewComponent } from '../../button-view/button-view.component';
import { AfficheurPopupComponent } from '../afficheur-popup/afficheur-popup.component';
import { AperculayoutComponent } from '../aperculayout/aperculayout.component';
import {MonitorService} from '../../../services/monitor.service';

@Component({
  selector: 'ngx-layout-manager',
  templateUrl: './layout-manager.component.html',
  styleUrls: ['./layout-manager.component.scss']
})
export class LayoutManagerComponent implements OnInit{

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus" ></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true,
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
      main_dimension: {
        title: 'Main',
        type: 'html',
        //valuePrepareFunction: (cell, row) => { return cell },
        editor: {
          type: 'list', // Used to set dropdown list from database. 
          config: {
            selectText: 'Select...',
            list: [
              {value: '1*2', title:'1x2'},
              {value: '2*2', title:'2x2'},
              {value: '2*3', title:'2x3'}
              
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
            true: 'true',
            false: 'false'
          },
        },
        filter: {
          type: 'checkbox',
          config: {
            true: 'true',
            false: 'false',
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
      // button2: {
      //   title: 'Aperçu',
      //   type: 'custom',
      //   renderComponent: AperculayoutComponent,
      //   filter : false
      // },
    },
    
    // rowClassFunction: (row) => {
    //   return 'ocean-st-row';  //we need this to select the 
    //   //closest parent as the class used by smart-table isnt applied directly
    // }
  };

  // source: LocalDataSource;

  data:any;
  // [
  //   {
  //     id: 1,
  //     name: "Layout1",
  //     main: "2x2",
  //     aside: "Ligne 1",
  //     footer: true,
  //   },
  //   {
  //     id: 1,
  //     name: "Layout2",
  //     main: "1x2",
  //     aside: "Ligne 2",
  //     footer: false,
  //   },
  //   {
  //     id: 1,
  //     name: "Layout3",
  //     main: "2x3",
  //     aside: "Ligne 3",
  //     footer: false,
  //   }
  // ];

  selectedID:any;
  constructor( private service : MonitorService) {
    // this.source = new LocalDataSource(this.data); // create the source
    console.log(this.data);


  }

  ngOnInit(){
    this.service.getLayoutList().subscribe(res=>{
      this.data=res;
    })
    this.service.eventEmitter2.subscribe(componentIds => {
      this.service.affectComponents(this.selectedID,componentIds )
      .subscribe((updatedLayout:any) => {
        console.log("components affected with success");
        this.data.forEach(element => {
          if (element.id == updatedLayout.id) {
            element.components = updatedLayout.components;
          }
        });
      })

    })
  }
  rowSelect(layout) {
    this.selectedID = layout.data.id;
    console.log("mn hni", layout);
    setTimeout(() => {
      this.service.sendLayout(layout);
    }, 20);
    
  }
  onCreateConfirm (event){
    this.service.addLayout(event.newData).subscribe((res:any)=>{
      console.log("success added Layout :",res);
      res.components= [];
      event.confirm.resolve(res);
    })
  }
  onEditConfirm(event){
    this.service.updateLayout(event.newData,event.data.id).subscribe(res=>{
      console.log("success updated Layout");
      event.confirm.resolve(event.newData);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Etes vous sûr de supprimer?')) {
      this.service.deleteLayout(event.data.id).subscribe(res=>{
        event.confirm.resolve();
      })
      
    } else {
      event.confirm.reject();
    }


  }
 

}
