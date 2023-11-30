import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string='';
  password: string='';

  constructor(private usersService:UsersService, private router:Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.usersService.login(user).subscribe((data) => {
      console.log(data);  //Data es el token que devuelve el endpoint
      this.usersService.setToken(data.token); //Guardo el token en navegador del cliente
      this.router.navigateByUrl('/');         //Si el registro fue bien envio a la ruta raiz con el router
    });
  }
}
