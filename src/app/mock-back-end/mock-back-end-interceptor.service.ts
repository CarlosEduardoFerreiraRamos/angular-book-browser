import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MockBackEndService } from './mock-back-end.service';

@Injectable()
export class MockBackEndInterceptorService implements HttpInterceptor {

  constructor(private _backEndService: MockBackEndService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('In MOCK back end', req);
    return  of(req).pipe(map(this.handleRequest));
  }

  handleRequest = (req: HttpRequest<any>) => {
    let response;
    if (req.method === 'GET') {
      response =  this.handleGetMethod(req);
    }

    console.log('MOCk response', response);
    return new HttpResponse(response);
  }

  private handleGetMethod({params, url}: HttpRequest<any>) {
    const isSeachingDetails = !!params.has('id');

    let body = null;
    let status = 404;

    if (isSeachingDetails) {
      body = this._backEndService.getBook(params.get('id'));
      status = !!body ? 200 : 404;
    } else {
      body = this._backEndService.getAll();
      status = !!body && body.length ? 200 : 404;
    }

    return {body, status};
  }

}
