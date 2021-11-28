import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { TvComponent } from './tv/tv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { NetworksComponent } from './networks/networks.component';
import { RegisterComponent } from './register/register.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home',canActivate:[AuthGuard],component: HomeComponent},
  {path: 'about',canActivate:[AuthGuard],component: AboutComponent},
  {path: 'movies',canActivate:[AuthGuard],component: MoviesComponent},
  {path: 'people',canActivate:[AuthGuard],component: PeopleComponent},
  {path: 'moviedetails/:id',canActivate:[AuthGuard],component: MovieDetailsComponent},
  {path: 'peopledetails/:id',canActivate:[AuthGuard],component: PeopleDetailsComponent},
  {path: 'tv',canActivate:[AuthGuard],component: TvComponent},
  {path: 'networks',canActivate:[AuthGuard],component: NetworksComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: '**',component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
