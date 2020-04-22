import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoctorComponent} from './doctor/doctor.component';
import {DoctorService} from '../../services/doctor.service';
import { CustomerComponent } from './customer/customer.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SignupComponent } from './signup/signup.component';
import {AuthSignupService} from '../../services/auth-signup.service';
import {CoreModule} from '../core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthSigninService} from '../../services/auth-signin.service';
import {AuthTokenStorageService} from '../../services/auth-token-storage.service';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';
import {SpecialtyService} from '../../services/specialty.service';
import {ScheduleService} from '../../services/schedule.service';



@NgModule({
  declarations: [DoctorComponent, CustomerComponent, SpecialtyComponent, ScheduleComponent, SignupComponent, NewDoctorComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DoctorService, AuthSignupService, AuthSigninService, AuthTokenStorageService, SpecialtyService, ScheduleService],
  entryComponents: [NewDoctorComponent]
})
export class RegisterModule {
}
