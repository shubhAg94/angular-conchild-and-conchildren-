import { Component, ContentChildren, QueryList } from '@angular/core';
import { BookDirective } from './book.directive';

@Component({
  selector: 'favourite-books',
  template: `
  <b><br/>Top Favourite Books</b>
	<ng-template ngFor let-book [ngForOf]= "topBooks">
	   <br/>{{book.bookId}} - {{book.bookName}}
	</ng-template>
		
	<br/><b>All Favorite Books</b>
		<ng-template ngFor let-book [ngForOf]= "allBooks">
	   <br/>{{book.bookId}} - {{book.bookName}}
	</ng-template>
  `
})
export class FavouriteBooksComponent {
    @ContentChildren(BookDirective) topBooks: QueryList<BookDirective>
    @ContentChildren(BookDirective, {descendants: true}) allBooks: QueryList<BookDirective>
} 