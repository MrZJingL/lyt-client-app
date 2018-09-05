import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JclbPage } from './jclb';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    JclbPage,
  ],
  imports: [
    IonicPageModule.forChild(JclbPage),
    PipesModule,
  ],
  exports:[
    JclbPage
  ]
})
export class JclbPageModule {}
