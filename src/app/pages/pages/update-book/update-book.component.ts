import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

   constructor(public updateBook:BooksService){

   }
   
   edit(id_book: number, title: string, author: string, cover_class: string, price: number, photo: string): void {

    let modificarLibro = new Book(
      id_book, 
      0,
      title,  
      cover_class,
      author,  
      price,   
      photo,  
      ""
    );
    
    

    if (this.updateBook.edit(modificarLibro)) {
      alert("Libro actualizado!!!");
    } else {
      alert("No se encuentra ningun libro");
    }
}
}