import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthTokenStorageService} from '../services/auth-token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuardGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthTokenStorageService,
              private route: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.hasToken()){
      return true;
    }

    this.route.navigate(['/auth']);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(route);
  }


}
