import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PartnerModel } from 'projects/models/partner.model';
import { PartnerService } from '../services/partner.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-list-p',
  templateUrl: './list-p.component.html',
  styleUrls: ['./list-p.component.scss']
})

export class ListPComponent implements OnInit {

  page : number = 0;
  limit : number = 5;
  params: string | null = '';
  partners! : PartnerModel[];
  dataSource : MatTableDataSource<PartnerModel> = new MatTableDataSource<PartnerModel>();
  displayedColumns: string[] = ['ACTION'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private partnerService: PartnerService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private spinner: NgxSpinnerService,
    private cdr: ChangeDetectorRef

  ) {

  }

  ngOnInit(): void {
    this.params = localStorage.getItem('params');
    if(this.params !== null){
     this.checkParams();
    }else{
      this.page = this.activatedRoute.snapshot.queryParams?.['page'] || 0;
      this.limit = this.activatedRoute.snapshot.queryParams?.['limit'] || 5;
      this.getdata();
    }

  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  checkParams(){
    const httpParams = new HttpParams({fromString: this.params!});
    let paramsObject = {} as any;
    httpParams.keys().forEach(key => {
      paramsObject[key] = httpParams.get(key);
    });
    localStorage.removeItem('params');
    localStorage.removeItem('savedUrl');
    this.router.navigate(['/home/list-p'], {queryParams: paramsObject});
    this.page = +paramsObject.page;
    this.limit = +paramsObject.limit;
    this.getdata();
    this.cdr.detectChanges();

  }
  getdata(){
    this.spinner.show();
    this.partnerService.listar().then((response) => {
      this.spinner.hide();
      this.partners = response;
      this.paginator.pageSize = this.limit;
      this.paginator.length = response.length;
      this.paginator.pageIndex = this.page;
      this.dataSource.data = this.partners;
      const otherColuns = response.length > 0 ? Object.keys(response[0]) : [];
      this.displayedColumns = [ ...otherColuns,'ACTION'];
    }
    ).catch((error) => {
      this._snackBar.open('Erro ao buscar dados', 'X',{
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

  deletePartner(element : PartnerModel){
    const dialogRef = this.dialog.open(ModalComponent, {
      width: 'auto',
      data: {
        name: element.name,
        titulo: 'Atenção',
        subtitulo: `Deseja realmente deletar `+element.name +`?`,
        type: 'delete'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.partnerService.delete(+element.id!).then((response) => {
          this._snackBar.open('Cadastro deletado com Sucesso', 'X',{
            duration: 2000,
            panelClass: ['success-snackbar'],
          });
        this.getdata();
      }).catch((error) => {
        this._snackBar.open('Erro ao deletar Parceiro', 'X',{
          duration: 2000,
          panelClass: ['danger-snackbar'],
        });
        console.log(error);
      });
      }
    });
  }

  editPartner(element : PartnerModel){
    const dialogRef = this.dialog.open(ModalComponent, {
      width: 'auto',
      data: {
        name: element.name,
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
