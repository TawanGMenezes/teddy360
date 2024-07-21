import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PartnerModel } from 'projects/models/partner.model';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private httpClient: HttpClient) { }

  listar(): Promise<PartnerModel[]> {
    return lastValueFrom(this.httpClient.get<PartnerModel[]>(`${environment.partnerApiUrl}`));
  }

  delete(id:number): Promise<PartnerModel>{
    return lastValueFrom(this.httpClient.delete<PartnerModel>(`${environment.partnerApiUrl}/${id}`));
  }

  editar(id : number, partner: PartnerModel): Promise<PartnerModel>{
    return lastValueFrom(this.httpClient.put<PartnerModel>(`${environment.partnerApiUrl}/${id}`, partner));
  }
}
