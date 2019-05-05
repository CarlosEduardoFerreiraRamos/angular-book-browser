import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '../../../../node_modules/@angular/common/http';
import { AppInterceptorService } from './app-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi: true}]
})
export class InterceptorServiceModule { }
