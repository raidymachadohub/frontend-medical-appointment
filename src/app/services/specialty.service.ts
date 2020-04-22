import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Specialty} from '../model/specialty';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService extends BaseService<Specialty> {

  constructor(public httpClient: HttpClient) {
    super(httpClient, `${environment.api}specialty/`);
  }
}
