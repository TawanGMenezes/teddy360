import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExternalCompanyModel } from 'projects/models/external-companies.model';
import { ExternalCompanyService } from '../services/external-companies.service';
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
  element! : ExternalCompanyModel;
  companiesForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private externalCompanyService: ExternalCompanyService,
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

    this.companiesForm = this.fb.group({
      'companyName': this.fb.control('',Validators.required),
      'collaboratorsCount': this.fb.control('',Validators.required),
      'isActive': this.fb.control(true),
    });

  }

  ngOnInit(): void {
    if(this.type === 'edit'){
    this.setvalues();
    }
  }

  setvalues(): void {
    this.companiesForm.get('companyName')?.setValue(this.element.companyName);
    this.companiesForm.get('collaboratorsCount')?.setValue(this.element.collaboratorsCount);
    this.companiesForm.get('isActive')?.setValue(this.element.isActive);

  }


  handleRegisterCompany() {
    if (this.companiesForm.invalid) {
      this._snackBar.open('Formulário Inválido', 'X',{
        duration: 2000,
        panelClass: ['warning-snackbar'],
      });
      return;
    }
    this.externalCompanyService.editar(+this.element.id!,this.companiesForm.value).then((response) => {
      this._snackBar.open('Cadastro editado com Sucesso', 'X',{
        duration: 2000,
        panelClass: ['success-snackbar'],

      });
      this.companiesForm.reset();
      this.ref.close();
    }
    ).catch((error) => {
      this._snackBar.open('Erro ao editar Cadastro', 'X',{
        duration: 2000,
        panelClass: ['danger-snackbar'],

      });
      console.log(error);
    }
    );
  }





}
