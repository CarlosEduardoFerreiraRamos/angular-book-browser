import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, DataTableColumnComponent } from './data-table.component';
import { MatTableModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [DataTableComponent, DataTableColumnComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [DataTableComponent, DataTableColumnComponent]

})
export class DataTableModule { }
