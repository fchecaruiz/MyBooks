import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/models/book';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(public addLibro:BooksService, public toastr:ToastrService){

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
  this.toastr.info("Libro añadido correctamente!!");
  // alert("Libro añadido correctamente");
  
}  else{
//   alert ("Completa todos los datos del formulario");
// }
     this.toastr.info("Completa todos los datos del formulario");
}
}
}






