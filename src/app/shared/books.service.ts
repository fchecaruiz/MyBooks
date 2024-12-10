import { Injectable } from '@angular/core';
import { Book } from 'src/models/book';
import { BooksComponent } from '../pages/books/books.component';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

 id_book: any = 0; //iniciar con valor cero para la busqueda del libro por ID_book
 libro_encontrado: boolean = true ; //hemos encotrado el libro
 

  public books: Book[] = [
    new Book(1, 100, "La isla de la mujer", "Ficción", "Arturo Pérez Reverte", 21.00, "./assets/La isla de la mujer Dormida.jpg", "tapa dura"),
    new Book(2, 101, "Victoria", "Romántico", "Paloma Sánchez Garnica", 24.00, "./assets/Victoria.jpg", "tapa dura"),
    new Book(3, 102, "Vivir en el Asombro", "Reflexión", "Enrique Soto Castro", 14.00, "./assets/Vivir en el Asombro.jpg", "tapa blanda"),
    new Book(4, 103, "Alax de Onix", "Terror", "Agustin Rioja Martinez", 24.00, "./assets/Alax de Onix.jpg", "tapa dura")
  ];

  constructor() { 
   
  }
  
  getAll(): Book[]{
    return this.books;
 }

  
  getOne(id_libro: number): Book | null {//coloco null para saber que e casillero esta a cero 
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id_book == id_libro) {
        return this.books[i]; 
      }
    }
    return null; 
  }
  

  add(book: Book):void{
    this.books.push(book)
}

  edit(book: Book): boolean {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id_book == book. id_book) {
        this.books[i] = book;
        return true; 
      }
    }
    return false; // retorna false, ... no se encontró el libro
  }
  
   delete(id_book: number): boolean {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id_book == id_book) {
        this.books.splice(i, 1);
        return true;  
      }
    }
    return false
  }

}


