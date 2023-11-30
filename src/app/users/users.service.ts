import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient, private cookies:CookieService) { }

  //Por medio de post le enviamos data de usuario al endpoint
  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }
  register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }

  //Metodos para guardar token en coockies y para obtenerlo
  setToken(token: string) {
    this.cookies.set("token",token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  //Si este metodo retorna true hay usuario logueado sino no hay usuario logueado
  autenticado(){
    return true;    //El logueo podria ser preguntar si hay token al navegador y consultar al backend
  }
}
