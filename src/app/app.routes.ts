import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { ConnectComponent } from './connect/connect.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth-service/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'about', component: AboutComponent }, 
    { path: 'careers', component: CareersComponent }, 
    { path: 'services', component: ServicesComponent },
    { path: 'news', component: NewsComponent },
    { path: 'connect', component: ConnectComponent},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' } 
];
