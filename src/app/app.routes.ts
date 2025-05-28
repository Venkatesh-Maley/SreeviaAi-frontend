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
import { ProductsComponent } from './products/products.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RefundComponent } from './refund/refund.component';
import { ServiceReadMoreComponent } from './service-read-more/service-read-more.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'about', component: AboutComponent }, 
    { path: 'careers', component: CareersComponent }, 
    { path: 'services', component: ServicesComponent },
    { path: 'news', component: NewsComponent },
    { path: 'connect', component: ConnectComponent},
    {path: 'products', component: ProductsComponent},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

    { path: 'terms', component: TermsComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'refund', component: RefundComponent },
    { path: 'services/readmore', component: ServiceReadMoreComponent },
    { path: 'news/readmore', component: NewsDetailsComponent },

    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' } 
];
