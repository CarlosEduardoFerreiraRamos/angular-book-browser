import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { InterceptorServiceModule } from './services/interceptor-service/interceptor-service.module';
import { MockBackEndModule } from './mock-back-end/mock-back-end.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InterceptorServiceModule,
    MockBackEndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
