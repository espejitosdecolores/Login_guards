import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string='';
  password: string='';
  confirmPassword: string='';
  passwordError: boolean=false;

  constructor(private usersService:UsersService, private router:Router) {}

  register() {
    const user = { email: this.email, password: this.password };
    this.usersService.register(user).subscribe((data) => {
      console.log(data);  //El endpoint retorna data con los datos de usuario creado hay que usar el usuario eve.holt@reqres.in cualquier pw
      this.usersService.setToken(data.token); //Guardo el token en cookies de usuario
      this.router.navigateByUrl('/');         //Si el registro fue bien envio a la ruta raiz con el router
    });
  }
}
