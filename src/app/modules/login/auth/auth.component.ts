import {Component, OnInit} from '@angular/core';
import {AuthSigninService} from '../../../services/auth-signin.service';
import {Auth} from '../../../model/auth';
import {AuthTokenStorageService} from '../../../services/auth-token-storage.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public auth: Auth = new Auth();

  constructor(private serviceSignin: AuthSigninService,
              private serviceStorage: AuthTokenStorageService,
              private toast: ToastrService,
              private route: Router) {
  }


  ngOnInit() {
  }

  public validate(): boolean {
    if (this.auth.username === undefined || !this.auth.username) {
      this.toast.error('Insira o email', 'Erro');
      return false;
    }
    if (this.auth.password === undefined || !this.auth.password) {
      this.toast.error('Insira a senha', 'Erro');
      return false;
    }

    return true;
  }

  public signin(): void {
    if (this.validate()) {
      this.serviceSignin.authJWT(this.auth).subscribe(x => {

        if (x.code === 400) {
          this.toast.error(x.message);
        } else {
          this.serviceStorage.setToken(x.accessToken);
          this.serviceStorage.setUsername(this.auth.username);
          this.route.navigate(['/']);
        }
      });
    }
  }

  public signup(): void {
    this.route.navigate(['signup']);
  }


}
