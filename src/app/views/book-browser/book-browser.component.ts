import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books-service/books.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-book-browser',
  templateUrl: './book-browser.component.html',
  styleUrls: ['./book-browser.component.scss']
})
export class BookBrowserComponent implements OnInit {

  $bookList: BehaviorSubject<any[]> = new BehaviorSubject([]);

  $dataSource: Observable<any[]> = this.$bookList.asObservable();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private _bookService: BooksService) { }

  ngOnInit() {
    this.fetchBookList();
  }

  fetchBookList() {
    this._bookService.get().subscribe( res => {
      this.$bookList.next(res);
      console.log('res end', res);
    });
  }

}
