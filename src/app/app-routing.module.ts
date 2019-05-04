import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'browser', loadChildren: './views/book-browser/book-browser.module#BookBrowserModule'},
  {path: '**', redirectTo: 'browser'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
