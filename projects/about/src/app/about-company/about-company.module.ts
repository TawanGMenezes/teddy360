import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './about-company.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AboutCompanyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutCompanyComponent,
      }
    ])
  ]
})
export class AboutCompanyModule { }
