import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  id_libro: number = 0;  
  libroEncontrado: Book; 

  books: Book[] = [];

  constructor(public booksService: BooksService) { 
    this.books = this.booksService.getAll(); 
  }

 
  getOne(): void {
    if (this.id_libro !== 0) {
      this.libroEncontrado = this.booksService.getOne(this.id_libro);
  
      if (!this.libroEncontrado) {
        alert("Libro no encontrado");
      }
    }
  }
  
    
  }
    

  












// id_book: number = 0; //iniciar con valor cero para la busqueda del libro por ID_book
// libro_encontrado: boolean = true ; //hemos encotrado el libro
// books: Book[] = []


  //constructor(private booksService: BooksService) {}


  // getOne() {
  //   // si valor de id_book es 0, no mostramos el mensaje de "no se encuentra el libro"
  //   if (this.id_book == 0) {
  //     this.libro_encontrado = true;
  //     return
  //   }
  
  //   let book = this.booksService.getOne(this.id_book); // busco libro por id
  //   if (typeof book == 'string') {// por si se añade un strung el resultado sera falso
  //     this.libro_encontrado = false; // No se encuentra el libro
  //   } else {
  //     this.libro_encontrado = true; // El libro es encontrado
  //   }
  // }

  

  // public books : Book[]= [
    
  //   new Book(1, 100,"La isla de la mujer","Ficción", "Arturo Perez Reverte", 21.00, "./assets/La isla de la mujer Dormida.jpg","tapa dura"),
  //   new Book(2, 101,"Victoria","Romántico", "Paloma Sanchez Garnica", 24.00, "./assets/Victoria.jpg","tapa dura"),
  //   new Book(3, 102, "Vivir en el Asombro","Reflexión", "Enrique Soto Castro", 14.00, "./assets/Vivir en el Asombro.jpg","tapa blanda"),
  //   new Book(4, 103, "Alax de Onix","Terror","Agustin Rioja Martinez", 24.00, "./assets/Alax de Onix.jpg","tapa dura")
  //  ];
  

    
   
//    libro:Book = new Book (0,0,"","","",0,"","");

//    agregarLibro(id_book: any, id_user: any,title:any, type: string, author: string, price: any, photo: string,cover_class:string): void {
//     this.libro.id_book = id_book;
//     this.libro.id_user = id_user;
//     this.libro.title = title;
//     this.libro.type= type;
//     this.libro.author = author;
//     this.libro.price = price;
//     this.libro.photo = photo;
//     this.libro.cover_class = cover_class;

  
//     this.books.push(this.libro);//añado los datos de los inputs al array books

   
//     this.libro = new Book(0, 0, "","", "", 0, "","");// reset despues de meter un libro.Pongo .this, porque si no lo pongo escribiria libro = (seria una variable)
//   }
//   resetFormulario(form: any){
//     form.reset();  // Resetea todo el formulario a su estado inicial
//   }

//   eliminarLibro(index: number) {
//     this.books.splice(index, 1);// eliminamos libro. Se elimina en indice indicado y solo un elemento. Asi funciona el splice()
      // this.books = this.books.filter(book => book.id_book != id_book);
// }


      

      
  
