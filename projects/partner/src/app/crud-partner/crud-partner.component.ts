import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PartnerService } from '../services/partner.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crud-partner',
  templateUrl: './crud-partner.component.html',
  styleUrls: ['./crud-partner.component.scss'],
  animations: []
})
export class CrudPartnerComponent implements  OnInit {

  partnerForm : FormGroup;
  clients: string[] = ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'];
  projects: string[] = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'];

  constructor(
    private fb: FormBuilder,
    private partnerService: PartnerService,
    private _snackBar: MatSnackBar
   ) {
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
  }

  handleRegister(){
    if(this.partnerForm.invalid){
      this._snackBar.open('Formulário Inválido', 'X',{
        duration: 2000,
        panelClass: ['warning-snackbar'],
      });
      return;
    }
    this.partnerService.cadastrar(this.partnerForm.value).then((response) => {
      this._snackBar.open('Cadastro efetuado com Sucesso', 'X',{
        duration: 2000,
        panelClass: ['success-snackbar'],
      });
      this.partnerForm.reset();
    }
    ).catch((error) => {
      this._snackBar.open('Erro ao efetuar Cadastro', 'X',{
        duration: 2000,
        panelClass: ['danger-snackbar'],
      });
      console.log(error);
    }
    );


  }
}

