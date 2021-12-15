import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFavesComponent } from './my-faves.component';
import { MyFavesRoutingModule } from './my-faves-routing.module';



@NgModule({
  declarations: [
    MyFavesComponent
  ],
  imports: [
    CommonModule,
    MyFavesRoutingModule
  ]
})
export class MyFavesModule { }
