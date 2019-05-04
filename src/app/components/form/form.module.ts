import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {
  MatInputModule,
  MatDatepickerModule,
  MatDividerModule,
  MatButtonModule,
  MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [FormComponent],
  providers: [MatDatepickerModule]
})
export class FormModule { }
