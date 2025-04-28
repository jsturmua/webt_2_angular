import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public authService: AuthService, private router: Router) { }

  onLoginClick(): void {
    // Function to handle login button click
    this.router.navigate(['/login']);
  }
  onSignUpClick(): void {
    // Function to handle login button click
    this.router.navigate(['/signup']);
  }
  onLogoutClick(): void {
    // Function to handle logout button click
    this.authService.logout(); // Call the logout method from AuthService
    this.router.navigate(['']);
  }
}
