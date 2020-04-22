import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Auth} from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthSigninService extends BaseService<Auth> {

  constructor(public httpClient: HttpClient) {
    super(httpClient, `${environment.api}auth/signin`);
  }
}
