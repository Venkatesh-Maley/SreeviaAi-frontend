import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../auth-service/local-storage.service'; // Adjust the import path as necessary

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected from styleUrl to styleUrls
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  onLogin() {
    const loginData = { email: this.email, password: this.password };

    this.http.post<{ token: string }>('http://localhost:8000/api/auth/signin', loginData)
      .subscribe({
        next: (response) => {
          // Use LocalStorageService to set the token
          this.localStorageService.setItem('authToken', response.token);

          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Login error:', error);
          alert('Invalid credentials. Please try again.');
        }
      });
  }
}