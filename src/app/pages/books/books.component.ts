import { Component } from '@angular/core';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books : Book[]= [
    
    new Book(1, 100,"Ficción", "Arturo Perez Reverte", 21.00, "./assets/La isla de la mujer Dormida.jpg"),
    new Book(2, 101,"Romántico", "Paloma Sanchez Garnica", 24.00, "./assets/Victoria.jpg"),
    new Book(3, 102, "Reflexión", "Enrique Soto Castro", 14.00, "./assets/Vivir en el Asombro.jpg"),
    new Book(4, 103, "Terror","Agustin Rioja Martinez", 24.00, "./assets/Alax de Onix.jpg")
   ];
    
   
   libro:Book = new Book (0,0,"","",0,"");

   agregarLibro(id_book: any, id_user: any, type: string, author: string, price: any, photo: string): void {
    this.libro.id_book = id_book;
    this.libro.id_user = id_user;
    this.libro.type = type;
    this.libro.author = author;
    this.libro.price = price;
    this.libro.photo = photo;

  
    this.books.push(this.libro);//añado los datos de los inputs al array books

   
    this.libro = new Book(0, 0, "", "", 0, "");// reset despues de meter un libro.Pongo .this, porque si no lo pongo escribiria libro = (seria una variable)
  }
  resetFormulario(form: any){
    form.reset();  // Resetea todo el formulario a su estado inicial
  }
}
        
      

      
  
