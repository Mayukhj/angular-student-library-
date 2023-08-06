import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { BooksComponent } from './books/books.component';
import { StudentformcomponentComponent } from './studentformcomponent/studentformcomponent.component';
import { BookformComponent } from './bookform/bookform.component';


const routes: Routes = [
  {
    path: 'studentComponent',component:StudentComponent
  },
  {
    path:'bookComponent',component:BooksComponent
  },
  {
path:'studentform',component:StudentformcomponentComponent
  },
 {
  path:'bookform',component:BookformComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';

