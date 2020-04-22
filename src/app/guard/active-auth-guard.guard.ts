import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthTokenStorageService} from '../services/auth-token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveAuthGuardGuard implements CanActivate {
  constructor(private auth: AuthTokenStorageService,
              private route: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.hasToken()) {
      return true;
    }

    this.route.navigate(['/']);
    return false;
  }

}
