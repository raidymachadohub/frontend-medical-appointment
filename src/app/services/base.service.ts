import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams, HttpUserEvent} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BaseService<T> {
  protected protocol: string = location.protocol;
  protected hostname: string = location.hostname;
  private api = environment.port;
  protected urlBase: string;
  protected parameters: HttpParams;
  protected fullUrl: string;


  constructor(public httpClient: HttpClient, public path: string) {
    this.urlBase = this.getUrlBase();
    this.parameters = new HttpParams();
    this.fullUrl = this.urlBase.concat(path);
  }

  public getUrlBase(): string {
    return this.protocol.concat('//').concat(this.hostname).concat(this.api);
  }

  public getToken(): string {
    return localStorage.getItem('TOKEN_STORAGE');
  }

  public clearParameter(): void {
    this.parameters = new HttpParams();
  }

  public addParameter(key: string, value: string): void {
    this.parameters = this.parameters.append(key, value);
  }

  public addParameterObject(object: any): void {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        if (object[key] !== undefined && object[key] !== null) {
          if (typeof object[key] === 'boolean') {
            this.addParameter(key, object[key] ? 'True' : 'False');
          } else {
            this.addParameter(key, object[key]);
          }
        }
      }
    }
  }

  protected addOptions(parameters?: HttpParams, responseType?: any): any {
    const httpOptions = {};
    let headers = new HttpHeaders();

    if (parameters) {
      httpOptions['params'] = parameters;
    }

    if (this.getToken() != null) {
      headers = headers.set('Authorization', 'Bearer ' + this.getToken());
    }

    httpOptions['headers'] = headers;

    if (responseType) {
      httpOptions['responseType'] = responseType;
    }

    return httpOptions;
  }

  public getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.fullUrl, this.addOptions(this.parameters))
      .pipe(
        tap(response => response as HttpUserEvent<T[]>),
        catchError(ex => from([]))
      );
  }

  public getOne(): Observable<T> {
    return this.httpClient.get<T>(this.fullUrl, this.addOptions(this.parameters))
      .pipe(
        tap(response => response as HttpUserEvent<T>),
        catchError(ex => from([]))
      );
  }

  public save(entity: T): Observable<T> {
    this.clearParameter();
    return this.httpClient.post<T>(this.fullUrl, entity, this.addOptions(this.parameters))
      .pipe(
        tap(response => response as HttpUserEvent<T>),
        catchError(ex => from([]))
      );
  }

  public authJWT(entity: T): Observable<T> {
    this.clearParameter();
    return this.httpClient.post<T>(this.fullUrl, entity, this.addOptions(this.parameters))
      .pipe(
        tap(response => response as HttpUserEvent<T>),
        catchError(ex => from([]))
      );
  }

  public getById(id: number): Observable<T> {
    return this.httpClient.get<T>(this.fullUrl.concat(String(id) + '/'), this.addOptions(this.parameters))
      .pipe(
        tap(response => response as HttpUserEvent<T>),
        catchError(ex => from([]))
      );
  }

  public delete(id: number): Observable<T> {
    this.clearParameter();
    return this.httpClient.delete<any>(this.fullUrl.concat(String(id) + '/'), this.addOptions(this.parameters))
      .pipe(
        tap(response => response as HttpUserEvent<any>),
        catchError(ex => from([]))
      );
  }

  public update(id: number, body: any): Observable<T> {
    this.clearParameter();
    return this.httpClient.put<T>(this.fullUrl.concat(String(id) + '/'), body, this.addOptions(this.parameters))
      .pipe(
        tap(response => response as HttpUserEvent<T>),
        catchError(ex => from([]))
      );
  }

}
