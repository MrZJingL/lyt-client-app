import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSignPage } from './add-sign';

@NgModule({
  declarations: [
    AddSignPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSignPage),
  ],
})
export class AddSignPageModule {}
