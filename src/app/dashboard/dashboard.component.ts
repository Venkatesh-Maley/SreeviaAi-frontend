import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../auth-service/local-storage.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  connections: any[] = []; // Array to hold connection data

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchConnections(); // Fetch connections on component initialization
  }

  fetchConnections(): void {
    this.http.get<any>('http://localhost:8000/api/getAll-connect') // Adjust the URL as necessary
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.connections = response.data; 
          } else {
            console.error('Failed to fetch connections:', response.message);
          }
        },
        error: (error) => {
          console.error('Error fetching connections:', error);
        }
      });
  }

  logout(): void {
    this.localStorageService.removeItem('authToken'); 
    this.router.navigate(['/login']); 
  }
}
