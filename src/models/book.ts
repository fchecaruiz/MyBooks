export class Book {
   
public id_book: number;
public id_user: number;
public type: string;
public author: string;
public price: number;
public photo: string;

  constructor (id_book:number = 0,id_user:number = 0,type: string,author: string,price: number,photo:string){
    this.id_book = 0;
    this.id_user = 0;
    this.type = type;
    this.author = author;
    this.price = price;
    this.photo = photo;
  }


}
