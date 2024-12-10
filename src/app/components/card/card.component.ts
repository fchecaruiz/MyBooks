import { Component,Input,Output,EventEmitter } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(public deleteCardX:BooksService){
  }

  @Input() book_libro: any;
  @Input() esPar_color: any;
  @Output() eliminarX = new EventEmitter<number>(); 

  eliminarCard() {
    //this.eliminarX.emit(this.book_libro.id_book); 
    this.deleteCardX.delete(this.book_libro.id_book);

  }

}





// import { Component,Input,Output,EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.css']
// })
// export class CardComponent {

//   @Input() book_libro: any;
//   @Input() esPar_color: any;


  
//   @Output() eliminarX = new EventEmitter<any>(); 

//   eliminarCard() {
//     this.eliminarX.emit(); 
//   }

// }

