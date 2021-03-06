import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockBackEndInterceptorService } from './mock-back-end-interceptor.service';
import { MockBackEndService } from './mock-back-end.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MockBackEndInterceptorService, multi: true},
    MockBackEndService
  ]
})
export class MockBackEndModule { }
