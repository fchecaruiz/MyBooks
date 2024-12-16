import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})



export class BooksComponent implements OnInit {

  id_libro:any;  
  libroEncontrado:Book |null=null
  books: Book[] = [];

  constructor(public booksService: BooksService, public toastr: ToastrService) {}

  ngOnInit(): void {
    this.books = this.booksService.getAll();
  }

  getOne(): void { 
    if (this.id_libro == null || this.id_libro == 0 
      || this.id_libro == undefined || this.id_libro == "" ) { 
      this.books = this.booksService.getAll()
      this.libroEncontrado = null;
    } else {
      this.libroEncontrado = this.booksService.getOne(this.id_libro); 
      if (!this.libroEncontrado) { 
        // alert("Libro no encontrado"); 
        this.toastr.info("Id del libro no encontrado")
      }
    }
  }
  

  
  // getOne(): void { 
  //   if (this.id_libro == null || this.id_libro == 0 
  //     || this.id_libro == undefined ||this.id_libro == "" )
  //    { 
  //     this.books = this.booksService.getAll();
   
  //   } else {
  //     this.libroEncontrado = this.booksService.getOne(this.id_libro); 
  //     if (!this.libroEncontrado) { 
  //       alert("Libro no encontrado"); 
  //     }
  //   }
    
  // }

  eliminarCard(id_book: number): void {
    if (this.libroEncontrado && this.libroEncontrado.id_book === id_book) {
      this.libroEncontrado = null;
    }
  
    // Actualizar el array books eliminando el libro específico
    this.books = this.books.filter(book => book.id_book !== id_book);
  
    // Volver a cargar toda la lista de libros
    this.books = this.booksService.getAll();
  }
  


  // id_libro = dato que el usuario introduce en el busccador
  // id_book = codigo del libro una vez creado el mismo
  // libroEncontrado = id_book que coincida con id_libro
  // book_libro = se usa para pasar libroEncontrado a card.component..
  //----a traves de <app-card>


  // eliminarCard(id_book: number):void{
  //   if (this.libroEncontrado && this.libroEncontrado.id_book == id_book){
  //   //si existe un libro buscado && libro buscado = al parametro id_book....
  //   //..que he buscado en el 
  //   //..recuadro de busqueda
  //   this.libroEncontrado = null ;
  //   // si se cumple la condicion el libro se elimina
  //   }
  // }

}


  











//  eliminarCard(book_libro: Book): void {
//    if (this.libroEncontrado && this.libroEncontrado.id_book == book_libro.id_book){
//      this.libroEncontrado = null; 
//     } 
//     let updatedBooks = []; 
//     for (let i = 0; i < this.books.length; i++){
//        if (this.books[i].id_book !== book_libro.id_book){
//          updatedBooks.push(this.books[i])
//         } 
//       } 
//       this.books = updatedBooks
//      }
//     }





  // eliminarLibro(index: number) {
  //   this.books.splice(index, 1);// eliminamos libro. Se elimina en indice indicado y solo un elemento. Asi funciona el splice()
  //     this.books = this.books.filter(book => book.id_book != book.id_book);
  // }
  
    

  












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

 
      

      
  
