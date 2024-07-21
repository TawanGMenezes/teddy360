import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { ExternalCompanyModel } from 'projects/models/external-companies.model';



@Injectable({
  providedIn: 'root'
})
export class ExternalCompanyService {

  constructor(private httpClient: HttpClient) { }

  listar(): Promise<ExternalCompanyModel[]> {
    return lastValueFrom(this.httpClient.get<ExternalCompanyModel[]>(`${environment.externalCompaniesApiUrl}`));
  }

  delete(id:number): Promise<ExternalCompanyModel>{
    return lastValueFrom(this.httpClient.delete<ExternalCompanyModel>(`${environment.externalCompaniesApiUrl}/${id}`));
  }

  editar(id : number, externalCompany: ExternalCompanyModel): Promise<ExternalCompanyModel>{
    return lastValueFrom(this.httpClient.put<ExternalCompanyModel>(`${environment.externalCompaniesApiUrl}/${id}`, externalCompany));
  }

}
