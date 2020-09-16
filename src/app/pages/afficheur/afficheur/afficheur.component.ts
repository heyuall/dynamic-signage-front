import { LocalDataSource } from 'ng2-smart-table';
import { Component, OnInit } from '@angular/core';
import{LayoutPopupComponent}from '../layout-popup/layout-popup.component';
import {MonitorService} from '../../../services/monitor.service';


@Component({
  selector: 'ngx-afficheur',
  templateUrl: './afficheur.component.html',
  styleUrls: ['./afficheur.component.scss']
})
export class AfficheurComponent  implements OnInit{

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
      afficheurReference: {
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
      layoutGrid : {
        title: 'Affecter Layout',
        type: 'custom',
        renderComponent: LayoutPopupComponent,
        filter: false
      },
    }
  };

  
  data: any;
  selectedID :number;
  constructor( private service : MonitorService) {
    // this.source = this.data; // create the source


  }

ngOnInit(){
// this.data= [
//   {
//     id : 1, 
//     name : "afficheur1",
//     reference: "ref1",
//     Layout: "layout1"
//   },
//   {
//     id : 2,
//     name : "afficheur2",
//     reference: "ref2",
//     Layout: "layout1"
//   },
//   {
//     id : 3,
//     name : "afficheur3",
//     reference: "ref3",
//     Layout: "layout1"
//   },
// ];
this.service.getMonitorList().subscribe(res=>{
  this.data = res;
});

this.service.eventEmitter.subscribe(layoutId=>{
 this.service.affectLayout(this.selectedID,layoutId).subscribe(res=>{
   console.log("success");
 })

})
}

rowSelect(event){
console.log(event);
this.selectedID=event.data.id;
}


  onDeleteConfirm(event): void {
    if (window.confirm('Etes vous sûr de supprimer?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }


  }
}
