import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Doctor} from '../model/doctor';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService extends BaseService<Doctor> {

  constructor(public httpClient: HttpClient) {
    super(httpClient, `${environment.api}doctor/`);
  }
}
