import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCComponent } from './list-c.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    ListCComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListCComponent,
      }
    ])
  ]
})
export class ListCModule { }
