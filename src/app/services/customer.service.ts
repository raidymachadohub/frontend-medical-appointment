import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<Customer> {

  constructor(public httpClient: HttpClient) {
    super(httpClient, `${environment.api}customer/`);
  }
}
