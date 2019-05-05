import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '../../../node_modules/@angular/common/http';
import { MockBackEndInterceptorService } from './mock-back-end-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MockBackEndInterceptorService, multi: true}]
})
export class MockBackEndModule { }
