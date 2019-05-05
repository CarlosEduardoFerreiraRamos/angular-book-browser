import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books-service/books.service';

@Component({
  selector: 'app-book-browser',
  templateUrl: './book-browser.component.html',
  styleUrls: ['./book-browser.component.scss']
})
export class BookBrowserComponent implements OnInit {

  constructor(private _bookService: BooksService) { }

  ngOnInit() {
  }

  test() {
    this._bookService.get().subscribe( res => console.log('res end', res));
  }

}
