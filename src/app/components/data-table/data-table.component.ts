import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input()
  get dataSource() { return this._dataSource; }
  set dataSource(v) {
    if (v) {
      this._dataSource = new MatTableDataSource<any>(v);
      this.setPaginator();
    }
  }

  @Input() displayedColumns: string[];

  @Input() pageSizeOptions = [5, 10, 20];

  private _dataSource: any;

  ngOnInit() {
  }

  setPaginator() {
    this.dataSource.paginator = this.paginator;
  }

}
