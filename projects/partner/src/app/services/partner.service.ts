import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PartnerModel } from 'projects/models/partner.model';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private httpClient: HttpClient) { }

  cadastrar(partner: PartnerModel): Promise<PartnerModel> {
    return lastValueFrom(this.httpClient.post<PartnerModel>(environment.partnerApiUrl, partner));
  }


}
