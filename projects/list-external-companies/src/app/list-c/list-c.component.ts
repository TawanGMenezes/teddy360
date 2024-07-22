import { ExternalCompanyService } from '../services/external-companies.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalCompanyModel } from 'projects/models/external-companies.model';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-c',
  templateUrl: './list-c.component.html',
  styleUrls: ['./list-c.component.scss']
})
export class ListCComponent implements OnInit {

  page : number = 0;
  limit! : number;

  externalCompanies! : ExternalCompanyModel[];
  dataSource = new MatTableDataSource<ExternalCompanyModel>();
  displayedColumns: string[] = ['ACTION'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private externalCompanyService: ExternalCompanyService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private spinner: NgxSpinnerService

  ) { }

  ngOnInit(): void {
    this.page = this.activatedRoute.snapshot.queryParams?.['page'] || 0;
    this.limit = this.activatedRoute.snapshot.queryParams?.['limit'] || 5;
    this.getdata()
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getdata(){
    this.spinner.show();
    this.externalCompanyService.listar().then((response) => {
      this.spinner.hide();
      this.externalCompanies = response;
      this.paginator.pageSize = this.limit;
      this.paginator.length = response.length;
      this.paginator.pageIndex = this.page;
      this.dataSource.data = this.externalCompanies;
      const otherColuns = response.length > 0 ? Object.keys(response[0]) : [];
      this.displayedColumns = [ ...otherColuns,'ACTION'];
    }
    ).catch((error) => {
      this._snackBar.open('Erro ao busca dados', 'X',{
        duration: 2000,
        panelClass: ['danger-snackbar'],
      });
      console.log(error);
    }
    );
  }

  paginatorChanged(event: any) {
    this.page = event.pageIndex;
    this.limit = event.pageSize;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        page: this.page,
        limit: this.limit
      },
      queryParamsHandling: 'merge',
    });

  }

  deletePartner(element : ExternalCompanyModel){
    const dialogRef = this.dialog.open(ModalComponent, {
      width: 'auto',
      data: {
        name: element.companyName,
        titulo: 'Atenção',
        subtitulo: `Deseja realmente deletar `+element.companyName +`?`,
        type: 'delete'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.externalCompanyService.delete(+element.id!).then((response) => {
          this._snackBar.open('Cadastro deletado com Sucesso', 'X',{
            duration: 2000,
            panelClass: ['success-snackbar'],

          });
        this.getdata();
      }).catch((error) => {
        this._snackBar.open('Erro ao deletar Compania', 'X',{
          duration: 2000,
          panelClass: ['danger-snackbar'],

        });
        console.log(error);
      });
      }
    });
  }

  editPartner(element : ExternalCompanyModel){
    const dialogRef = this.dialog.open(ModalComponent, {
      width: 'auto',
      data: {
        name: element.companyName,
        titulo: 'Editar',
        type: 'edit',
        element: element
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getdata();
    });
  }

}
