import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/models/book';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(public deleteCardX:BooksService){
  }

  @Input() book_libro:Book;
  @Input() esPar_color: any;
  @Output() eliminarX = new EventEmitter<number>(); 


  eliminarCard() {
    this.eliminarX.emit(this.book_libro.id_book)
    //this.eliminarX.emit(this.book_libro); 
    this.deleteCardX.delete(this.book_libro.id_book);
}
}





// }
  // eliminarCard() {
  //   this.eliminarX.emit(); 
  // }








