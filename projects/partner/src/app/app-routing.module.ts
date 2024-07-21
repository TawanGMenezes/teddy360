import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudPartnerComponent } from './crud-partner/crud-partner.component';

const routes: Routes = [
  {
    path: 'crud-partner',
    component: CrudPartnerComponent,
  },
  {
    path: '',
    redirectTo: 'crud-partner',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
