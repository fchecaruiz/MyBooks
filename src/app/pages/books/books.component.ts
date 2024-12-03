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

  }
