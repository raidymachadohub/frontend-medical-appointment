import {Component, OnInit} from '@angular/core';
import {AuthSigninService} from '../../../services/auth-signin.service';
import {AuthSignupService} from '../../../services/auth-signup.service';
import {Auth} from '../../../model/auth';
import {AuthTokenStorageService} from '../../../services/auth-token-storage.service';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private auth: Auth = new Auth();

  constructor(private serviceSignin: AuthSigninService,
              private serviceSignup: AuthSignupService,
              private serviceStorage: AuthTokenStorageService,
              private toast: ToastrService) {
  }


  ngOnInit() {
  }

  public validate(): boolean {
    if (this.auth.username === undefined || !this.auth.username) {
      this.toast.error('Insira usuário', 'Erro');
      return false;
    }
    if (this.auth.password === undefined || !this.auth.password) {
      this.toast.error('Insira senha', 'Erro');
      return false;
    }

    return true;
  }

  public signin(): void {
    if (this.validate()) {
      this.serviceSignin.authJWT(this.auth).subscribe(x => {
        this.serviceStorage.setToken(x.accessToken);
        this.serviceStorage.setUsername(this.auth.username);
      });
    }
  }

  public signup(): void {
    this.serviceSignup.authJWT(this.auth).subscribe(x => {
      //OK
    });
  }

}
