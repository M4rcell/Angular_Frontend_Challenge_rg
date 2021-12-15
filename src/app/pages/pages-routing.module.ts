import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../app/pages/all/all.module').then(m => m.AllModule),
      },
      {
        path: 'all',
        loadChildren: () => import('../../app/pages/all/all.module').then(m => m.AllModule),
      },
      {
        path: 'my-faves',
        loadChildren: () => import('../../app/pages/my-faves/my-faves.module').then(m => m.MyFavesModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
