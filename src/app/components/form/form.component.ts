import { Component, OnInit, QueryList, ContentChildren, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  @ContentChildren(NgModel, {descendants: true}) models: QueryList<NgModel>;

  @ViewChild(NgForm) form: NgForm;

  @Output() valueChanges = new EventEmitter();

  @Output() formSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.subscribeToValueChanges();
    this.addContentModels();
  }

  private subscribeToValueChanges() {
    this.form.valueChanges
    .pipe(debounceTime(300))
    .subscribe( values => {
      this.valueChanges.emit(values);
    });
  }

  private addContentModels() {
    this.models.forEach((model) => {
      this.form.addControl(model);
    });
  }
}
