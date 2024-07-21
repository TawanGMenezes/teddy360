import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { ExternalCompanyModel } from 'projects/models/external-companies.model';


@Injectable({
  providedIn: 'root'
})
export class ExternalCompanyService {

  constructor(private httpClient: HttpClient) { }

  cadastrar(externalCompany: ExternalCompanyModel): Promise<ExternalCompanyModel> {
    return lastValueFrom(this.httpClient.post<ExternalCompanyModel>(environment.externalCompaniesApiUrl, externalCompany));
  }


}
