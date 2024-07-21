
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudCompaniesComponent } from './crud-companies.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    CrudCompaniesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    RouterModule.forChild([
      {
        path: '',
        component: CrudCompaniesComponent,
      }
    ])
  ]
})
export class CrudCompaniesModule { }
