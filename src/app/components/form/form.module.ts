import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {
  MatInputModule,
  MatDatepickerModule,
  MatDividerModule,
  MatButtonModule,
  MatNativeDateModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
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
