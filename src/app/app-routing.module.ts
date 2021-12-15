import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: 'home',
    loadChildren: () => import('../app/pages/pages.module').then(m => m.PagesModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

// { path: '**', component: NotFoundComponent }

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
