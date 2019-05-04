import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { MatTableModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [DataTableComponent]

})
export class DataTableModule { }
