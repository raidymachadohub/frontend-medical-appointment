import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Schedule} from '../model/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends BaseService<Schedule> {

  constructor(public httpClient: HttpClient) {
    super(httpClient, `${environment.api}schedule/`);
  }
}
