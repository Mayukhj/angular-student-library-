import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BooksComponent } from './books/books.component';
import { StudentformcomponentComponent } from './studentformcomponent/studentformcomponent.component';
import { BookformComponent } from './bookform/bookform.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    BooksComponent,
    StudentformcomponentComponent,
    BookformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
