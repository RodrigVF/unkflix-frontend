import { Routes } from '@angular/router';
import { HomeComponent } from './pages/logged/home/home.component';
import { RegistrationComponent } from './pages/not-logged/registration/registration.component';
import { LoginComponent } from './pages/not-logged/login/login.component';
import { CreateMovieComponent } from './pages/logged/create-movie/create-movie.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'novo-filme',
    component: CreateMovieComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastre-se',
    component: RegistrationComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
