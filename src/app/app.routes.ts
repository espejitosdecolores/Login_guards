import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RutaxComponent } from './rutax/rutax.component';
import { tuGuardGuard } from './tu-guard.guard';


export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'otra-ruta',component:RutaxComponent, canActivate:[tuGuardGuard]}
];
