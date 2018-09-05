import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntrustPage } from './entrust';
import{ HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    EntrustPage,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(EntrustPage),
  ],
  
  exports:[
    EntrustPage,
  ]
})
export class EntrustPageModule {}
