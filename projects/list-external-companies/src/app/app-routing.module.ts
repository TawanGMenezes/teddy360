import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCComponent } from './list-c/list-c.component';

const routes: Routes = [
  {
    path: 'list-c',
    component: ListCComponent,
  },
  {
    path: '',
    redirectTo: 'list-c',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
