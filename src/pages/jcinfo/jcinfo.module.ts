import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JcinfoPage } from './jcinfo';

@NgModule({
  declarations: [
    JcinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(JcinfoPage),
  ],
})
export class JcinfoPageModule {}
