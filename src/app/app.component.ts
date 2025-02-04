import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sreevia-frontend';
  isLoginRoute: boolean = false;
  isDashBoardRoute: boolean = false;
  isPageNotFound: boolean = false; // Add this flag


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginRoute = event.url === '/login';
        this.isDashBoardRoute = event.url === '/dashboard';

        this.isPageNotFound = event.url.startsWith('/404');  // Ensure 404 detection

      }
    });
  }
}
