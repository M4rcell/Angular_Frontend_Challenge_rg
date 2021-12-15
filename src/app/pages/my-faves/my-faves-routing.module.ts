import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFavesComponent } from './my-faves.component';

const routes: Routes = [
  {
    path: '',
    component: MyFavesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFavesRoutingModule { }