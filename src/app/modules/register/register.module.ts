import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoctorComponent} from './doctor/doctor.component';
import {DoctorService} from '../../services/doctor.service';
import { CustomerComponent } from './customer/customer.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [DoctorComponent, CustomerComponent, SpecialtyComponent, ScheduleComponent],
  imports: [
    CommonModule
  ],
  providers: [DoctorService]
})
export class RegisterModule {
}
