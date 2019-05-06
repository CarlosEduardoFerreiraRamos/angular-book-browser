import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class BooksService {

  readonly SERVICE_PATH = 'book';

  constructor(private _http: HttpClient) { }

  get(): Observable<any> {
    return this._http.get(this.path());
  }

  private get basePath(): string {
    return `${environment.apiHost}/${this.SERVICE_PATH}`;
  }

  private path(url: string = ''): string {
    return `${this.basePath}${url}`;
  }
}
