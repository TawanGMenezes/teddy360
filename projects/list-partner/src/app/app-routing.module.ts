import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPComponent } from './list-p/list-p.component';

const routes: Routes = [
  {
    path: 'list-p',
    component: ListPComponent,
  },
  {
    path: '',
    redirectTo: 'list-p',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
