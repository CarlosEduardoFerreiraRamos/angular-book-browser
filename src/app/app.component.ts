import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isRoutLoading = false;

  constructor (private router: Router) {}

  ngOnInit () {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
          this.isRoutLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
          this.isRoutLoading = false;
      }
    });
  }
}
