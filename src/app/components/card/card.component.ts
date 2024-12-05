import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() book_libro: any;
  @Input() esPar_color: any;
  @Output() eliminarX = new EventEmitter<any>(); 

  eliminarCard() {
    this.eliminarX.emit(); 
  }

}

