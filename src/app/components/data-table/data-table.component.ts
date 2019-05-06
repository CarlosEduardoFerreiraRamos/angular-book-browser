import { Component, OnInit, ViewChild, Input, ContentChildren, QueryList } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-data-table-cloumn',
  template: `
  <ng-content></ng-content>
  `
})
export class DataTableColumnComponent {
  @Input() name: string;
  @Input() label: string;
}

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

  @ContentChildren(DataTableColumnComponent)
  set columns(v: QueryList<DataTableColumnComponent>) {
    if (v) {
      console.log('columns', v);
      this._columns = v;
    }
  }
  get columns() {
    return this._columns;
  }

  contentColumns = [];

  private _dataSource: any;

  private _columns: QueryList<DataTableColumnComponent>;

  ngOnInit() {
  }

  setContentColumns() {
    debugger
    this.contentColumns = this.columns.map( (({name, label}) => ({name, label})));
  }

  setPaginator() {
    this.dataSource.paginator = this.paginator;
  }

}
