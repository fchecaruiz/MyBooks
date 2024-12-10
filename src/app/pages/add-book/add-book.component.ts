import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/models/book';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(public addLibro:BooksService){

}

add(title: string, cover_class: string, author: string, price: number, photo: string, id_book: number): void {
    if (title && cover_class && author && price && photo && id_book){

    let nuevoLibro = new Book(
      id_book, 
      0,
      title,  
      cover_class,
      author,  
      price,   
      photo,  
      ""
    );
  
  this.addLibro.add(nuevoLibro);
  alert("Libro añadido correctamente");
}  else{
  alert ("Completa todos los datos del formulario")
}

}
}






