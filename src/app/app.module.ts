import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookDirective }  from './book.directive';
import { WriterComponent }  from './writer.component';
import { FavouriteBooksComponent }  from './favourite-books.component';
import { CityComponent }  from './city.component';
import { AddressComponent }  from './address.component';
import { FavouriteCitiesComponent }  from './favourite-cities.component';
import { FriendComponent }  from './friend.component';
import { FavouriteFriendsComponent }  from './favourite-friends.component';
import { PersonComponent }  from './person.component';
import { ChildComponent }  from './child.component';
import { ParentComponent }  from './parent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
 declarations: [
    AppComponent,
		BookDirective,
		WriterComponent,
		FavouriteBooksComponent,
		CityComponent,
		AddressComponent,
    ChildComponent,
    ParentComponent,
		FavouriteCitiesComponent,
		FriendComponent,
		FavouriteFriendsComponent,			
		PersonComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
