import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPComponent } from './list-p.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxSpinnerModule } from 'ngx-spinner';





@NgModule({
  declarations: [
    ListPComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    NgxSpinnerModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPComponent,
      }
    ])
  ]
})
export class ListPModule { }
