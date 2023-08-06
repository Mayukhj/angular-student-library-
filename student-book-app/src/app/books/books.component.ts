import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
bookdata= [{
  "name": "Obsessive Genius",
  "author": "Marie Curie",
  "genre": "Chemistry",
  "assigned":"yes"
},
{
  "name": "Invaluable",
  "author": "Maya Grossman",
  "genre": "Business",
  "assigned":"yes"
},
{
  "name": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "genre": "English",
  "assigned":"no"
},
{
  "name": "Fahrenheit 451",
  "author": "Ray Bradbury",
  "genre": "Science",
  "assigned":"no"
},
{
  "name": "The Great Gatsby",
  "author": "Fitzgerald",
  "genre": "Fiction",
  "assigned":"yes"
},
{
  "name": "East of Eden",
  "author": "John Steinbeck",
  "genre": "Drama",
  "assigned":"no"
},
{
  "name": "Romeo and Juliet",
  "author": "William Shakespeare",
  "genre": "Tragedy",
  "assigned":"yes"
},
{
  "name": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "genre": "Story",
  "assigned":"no"
},
{
  "name": "Lord of the Flies",
  "author": "William Golding",
  "genre": "Adventure",
  "assigned":"no"
},
{
  "name": "Hiroshima",
  "author": "John Hersey",
  "genre": "War",
  "assigned":"no"
}

];

}
