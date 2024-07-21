import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudCompaniesComponent } from './crud-companies/crud-companies.component';

const routes: Routes = [
  {
    path: 'crud-companies',
    component: CrudCompaniesComponent,
  },
  {
    path: '',
    redirectTo: 'crud-companies',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
