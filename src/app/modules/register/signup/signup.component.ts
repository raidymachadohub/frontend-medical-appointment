import {Component, OnInit} from '@angular/core';
import {AuthSignupService} from '../../../services/auth-signup.service';
import {ToastrService} from 'ngx-toastr';
import {Auth} from '../../../model/auth';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AuthSigninService} from '../../../services/auth-signin.service';
import {AuthTokenStorageService} from '../../../services/auth-token-storage.service';
import {Router} from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  private auth: Auth = new Auth();


  constructor(private serviceSignup: AuthSignupService,
              private serviceSignin: AuthSigninService,
              private serviceStorage: AuthTokenStorageService,
              private toast: ToastrService,
              private route: Router) {
    this.auth.roles = new Array<string>();
  }

  ngOnInit() {
  }


  public validate(): boolean {
    this.auth.username = this.emailFormControl.value;
    this.auth.roles.push('user');

    if (this.auth.name === undefined || !this.auth.name) {
      this.toast.info('Preencha o nome', 'Atenção');
      return false;
    }

    if (this.auth.username === undefined || !this.auth.username) {
      this.toast.info('Preencha o email', 'Atenção');
      return false;
    }
    if (this.auth.password === undefined || !this.auth.password) {
      this.toast.info('Preencha a senha', 'Atenção');
      return false;
    }

    return true;
  }

  public save(): void {
    if (this.validate()) {
      this.serviceSignup.save(this.auth).subscribe(x => {
        if (x.code === 200) {
          this.toast.success(x.message);
          this.serviceSignin.authJWT(this.auth).subscribe(x => {
            this.serviceStorage.setToken(x.accessToken);
            this.serviceStorage.setUsername(this.auth.username);
            this.route.navigate(['/']);
          });
        }
        if (x.code === 400) {
          this.toast.error(x.message);
        }
      });
    }
  }

}
