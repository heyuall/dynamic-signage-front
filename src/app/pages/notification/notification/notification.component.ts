import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent  {

  constructor() { }

  notifications: { ligne: string, value: string }[] = [
    { ligne: 'Ligne 1', value: 'Arrêt Planifié' },
    { ligne: 'Ligne 2', value: 'Blockage' },
    { ligne: 'Ligne 3', value: 'En progression' },
    { ligne: 'Ligne 2', value: 'Fin série1' },
   
  ];
  Ligne1: { ligne: string, value: string }[] = [
    { ligne: 'Ligne 1', value: 'Arrêt Planifié' },
    { ligne: 'Ligne 1', value: 'Blockage' },
    { ligne: 'Ligne 1', value: 'En progression' },
    { ligne: 'Ligne 1', value: 'Fin série1' },
   
  ];
  Ligne2: { ligne: string, value: string }[] = [
    { ligne: 'Ligne 2', value: 'En progression' },
    { ligne: 'Ligne 2', value: 'Arrêt Planifié' },
    { ligne: 'Ligne 2', value: 'Blockage' },
     { ligne: 'Ligne 2', value: 'Fin série2' },
   
  ];
  Ligne3: { ligne: string, value: string }[] = [
    { ligne: 'Ligne 3', value: 'Arrêt Planifié' },
    { ligne: 'Ligne 3', value: 'En progression' },
    { ligne: 'Ligne 3', value: 'Fin série3' },
    { ligne: 'Ligne 3', value: 'Blockage' },
   
  ];
  

}
