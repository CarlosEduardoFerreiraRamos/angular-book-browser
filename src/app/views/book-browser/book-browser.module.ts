import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookBrowserRoutingModule } from './book-browser-routing.module';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { FormModule } from 'src/app/components/form/form.module';
import { BookBrowserComponent } from './book-browser.component';
import { BooksServiceModule } from '../../services/books-service/books-service.module';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BookBrowserComponent],
  imports: [
    CommonModule,
    BookBrowserRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DataTableModule,
    BooksServiceModule,
    FlexLayoutModule,
    FormModule,
    FormsModule,
    MatDividerModule
  ],
  providers: [MatDatepickerModule]
})
export class BookBrowserModule { }
