import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {

  constructor(private _http: HttpClient) { }

  get() {
    return this._http.get('https://mock-service');
  }
}
