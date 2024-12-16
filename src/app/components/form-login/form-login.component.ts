import { Component } from '@angular/core';
import { User } from 'src/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public user:User;

constructor(){
  this.user = new User(0,"","","","","","")
}

onSubmit(formLogin:NgForm):void{
  console.log(formLogin.value)
  console.log(this.user)
}


}
