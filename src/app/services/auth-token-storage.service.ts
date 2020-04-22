import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenStorageService {

  public static TOKEN_STORAGE = 'TOKEN_STORAGE';
  private static USER_STORAGE = 'USER_STORAGE';

  constructor() {
  }

  public setToken(token: string): void {
    localStorage.setItem(AuthTokenStorageService.TOKEN_STORAGE, token);
  }

  public setUsername(username: string): void {
    localStorage.setItem(AuthTokenStorageService.USER_STORAGE, username);
  }

  public invalidateStorage(): void {
    localStorage.removeItem(AuthTokenStorageService.TOKEN_STORAGE);
    localStorage.removeItem(AuthTokenStorageService.USER_STORAGE);
  }

  public hasToken(): Boolean {
    if (localStorage.getItem(AuthTokenStorageService.TOKEN_STORAGE) !== null) {
      return true;
    } else {
      return false;
    }
  }

}
