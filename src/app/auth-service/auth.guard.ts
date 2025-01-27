import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  canActivate(): boolean {
    if (this.localStorageService.getItem('authToken')) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
  }
}