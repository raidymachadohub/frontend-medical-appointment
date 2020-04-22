import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth/auth.component';
import {AuthSigninService} from '../../services/auth-signin.service';
import {AuthSignupService} from '../../services/auth-signup.service';
import {AuthTokenStorageService} from '../../services/auth-token-storage.service';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule
  ],
  providers: [AuthSigninService, AuthSignupService, AuthTokenStorageService
  ]
})
export class LoginModule {
}
