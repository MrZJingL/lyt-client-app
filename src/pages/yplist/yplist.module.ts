import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YplistPage } from './yplist';

@NgModule({
  declarations: [
    YplistPage,
  ],
  imports: [
    IonicPageModule.forChild(YplistPage),
  ],
})
export class YplistPageModule {}
