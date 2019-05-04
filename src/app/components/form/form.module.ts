import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {
  MatInputModule,
  MatDatepickerModule,
  MatDividerModule,
  MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [FormComponent]
})
export class FormModule { }
