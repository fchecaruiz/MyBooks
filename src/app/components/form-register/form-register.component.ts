import { Component } from "@angular/core"; 
import { FormGroup, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { User } from "src/models/user";


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent{

  public myForm : FormGroup;

  constructor(public formBuilder: FormBuilder,public toastr : ToastrService){

      const minPassLength = 8;
  
      this.myForm = this.formBuilder.group({
        nombre: [ , Validators.required],
        apellido: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]], 
        url: ["", Validators.required],
        password:["", [Validators.required, Validators.minLength(minPassLength)]],
        password2:["",[Validators.required, this.checkPasswords]],
      });
    }

  public register(){

    let user = this.myForm.value;
    this.toastr.info("Registrado correctamente")
    console.log(user);
    console.log(this.toastr)
  }


  private checkPasswords(control: AbstractControl)
  {
    let resultado = {matchPassword: true};

    // console.log(control.parent);
    // console.log(control.parent?.value);
    // console.log(control);


    if (control.parent?.value.password == control.value)
      resultado = null;

    return resultado;
  }
}

