import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookBrowserRoutingModule } from './book-browser-routing.module';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { FormModule } from 'src/app/components/form/form.module';
import { BookBrowserComponent } from './book-browser.component';

@NgModule({
  declarations: [BookBrowserComponent],
  imports: [
    CommonModule,
    BookBrowserRoutingModule,
    DataTableModule,
    FormModule
  ]
})
export class BookBrowserModule { }