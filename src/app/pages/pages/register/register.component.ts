import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

}














// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

//   public formRegistro: FormGroup;

//   constructor(private formBuilder:FormBuilder){

//     const numCaracteres= 8;

//     this.formRegistro = this.formBuilder.group({

   

//       nombre:[, Validators.required],
//       apellidos:[, Validators.required],
//       url:[, Validators.required, this.escribirUrl()],
//       email:[, Validators.required, Validators.email],
//       contraseña:[, Validators.required, Validators.minLength(numCaracteres)],
//       contraseñaR:[, Validators.required, Validators.minLength(numCaracteres)],




//     }





//     )
//   }





