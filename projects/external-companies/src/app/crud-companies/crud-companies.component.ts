import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ExternalCompanyService } from '../services/external-companies.service';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-crud-companies',
  templateUrl: './crud-companies.component.html',
  styleUrls: ['./crud-companies.component.scss'],
  animations: []
})

export class CrudCompaniesComponent implements OnInit {

  companiesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private externalCompanyService: ExternalCompanyService,
    private _snackBar: MatSnackBar
  ) {
    this.companiesForm = this.fb.group({
      'companyName': new FormControl('', Validators.required),
      'collaboratorsCount': new FormControl('', Validators.required),
      'isActive': new FormControl(true, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  handleRegisterCompany() {
    if (this.companiesForm.invalid) {
      this._snackBar.open('Formulário Inválido', 'X',{
        duration: 2000,
        panelClass: ['warning-snackbar'],
      });
      return;
    }
    this.externalCompanyService.cadastrar(this.companiesForm.value).then((response) => {
      this._snackBar.open('Cadastro efetuado com Sucesso', 'X',{
        duration: 2000,
        panelClass: ['success-snackbar'],
      });
      this.companiesForm.reset();
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
