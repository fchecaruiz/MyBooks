import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent {

  book: Book = new Book(0, 0, '', '', '', 0, '', ''); // Instancia del objeto book

  constructor(private updateBook: BooksService,public toastr: ToastrService) {}

 
  edit(): void {//no necesito pasar parámetros individuales, porque el objeto book ya tiene el dato....
                // ......ya que con ngModels los datos entran directamente a la vez que los input del formulario
    
     if (this.updateBook.edit(this.book)) {
      // alert("Libro actualizado!!!");
      this.toastr.info("Libro actualizado correctamente")
    } else {
      // alert("No se encontro ningun libro");
      this.toastr.info("No se encontro ningun libro")
    }
  }
}
