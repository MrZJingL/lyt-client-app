import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import {PipesModule} from "../../pipes/pipes.module";
import{ HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ContactPage),
    HttpModule,
  ],
  exports:[
    ContactPage
  ]
})
export class ContactPageModule {}