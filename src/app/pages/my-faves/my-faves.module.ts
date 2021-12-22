import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFavesComponent } from './my-faves.component';
import { MyFavesRoutingModule } from './my-faves-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    MyFavesComponent
  ],
  imports: [
    CommonModule,
    MyFavesRoutingModule,    
    FormsModule,
    MatSelectModule,
    MatIconModule,
    NgxPaginationModule,

  ]
})
export class MyFavesModule { }
