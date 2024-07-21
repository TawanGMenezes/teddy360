import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';

const routes: Routes = [
  {
    path: 'about-company',
    component: AboutCompanyComponent,
  },
  {
    path: '',
    redirectTo: 'about-company',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
