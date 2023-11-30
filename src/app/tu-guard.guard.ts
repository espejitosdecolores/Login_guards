import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from './users/users.service';
import { inject } from '@angular/core';

export const tuGuardGuard: CanActivateFn = (route, state) => {
  const usersService = inject(UsersService);
  const router = inject(Router);

//Si viene falso del metodo autenticado entra en el if, y el guard bloquea ruta y redirige al login
  if(!usersService.autenticado()){
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
