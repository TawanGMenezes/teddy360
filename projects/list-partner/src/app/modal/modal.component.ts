import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PartnerModel } from 'projects/models/partner.model';
import { PartnerService } from '../services/partner.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})


export class ModalComponent implements OnInit {

  type: string = '';
  titulo: string = '';
  subtitulo: string = '';
  cancelText: string = 'Cancelar';
  okText: string = 'Sim';
  element! : PartnerModel;
  partnerForm: FormGroup;
  clients: string[] = ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'];
  projects: string[] = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private partnerService: PartnerService,
    private ref: DialogRef,
    private _snackBar: MatSnackBar
  ) {
    if(data.titulo) {
      this.titulo = data.titulo;
    }
    if(data.subtitulo) {
      this.subtitulo = data.subtitulo;
    }
    if(data.type) {
      this.type = data.type;
    }
    if(data.element) {
      this.element = data.element;
    }

    this.partnerForm = this.fb.group({
      'name': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'repositoryGit': new FormControl('', Validators.required),
      'urlDoc': new FormControl('', Validators.required),
      'clients': new FormControl([]),
      'projects': new FormControl([]),
    });
  }

  ngOnInit(): void {
    if(this.type === 'edit'){
    this.setvalues();
    }
  }

  setvalues(): void {
    this.partnerForm.get('name')?.setValue(this.element.name);
    this.partnerForm.get('description')?.setValue(this.element.description);
    this.partnerForm.get('repositoryGit')?.setValue(this.element.repositoryGit);
    this.partnerForm.get('urlDoc')?.setValue(this.element.urlDoc);
    this.partnerForm.get('clients')?.setValue(this.element.clients);
    this.partnerForm.get('projects')?.setValue(this.element.projects);
  }

  handleRegister(){
    if(this.partnerForm.invalid){
      this._snackBar.open('Formulário Inválido', 'X',{
        duration: 2000,
        panelClass: ['warning-snackbar'],
      });
      return;
    }
    this.partnerService.editar(+this.element?.id!, this.partnerForm.value).then((response) => {
      this._snackBar.open('Parceiro editado com Sucesso', 'X',{
        duration: 2000,
        panelClass: ['success-snackbar'],
      });
      this.partnerForm.reset();
      this.ref.close();

    }
    ).catch((error) => {
      this._snackBar.open('Erro ao efetuar edição', 'X',{
        duration: 2000,
        panelClass: ['danger-snackbar'],
      });
      console.log(error);
    }
    );


  }
}
