import { Component } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  usuario: User = new User(1, "Nando", "Checa Ruiz", "fchecaruiz@gmail.com", "foto.jpg", "password","www.gisis.com");

  modificarDatos() {
    
    console.log("Datos modificados:");
    console.log("Nombre:", this.usuario.name);
    console.log("Apellidos:", this.usuario.last_name);
    console.log("Correo:", this.usuario.email);
    console.log("URL:", this.usuario.url);

    let boton_especial = document.querySelector("button")!;
    boton_especial.style.backgroundColor = 'red'; 
    boton_especial.innerHTML = "datos modificados";
  }
  }

  


