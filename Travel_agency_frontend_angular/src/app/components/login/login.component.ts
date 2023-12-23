import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule, HttpClientModule],

})
export class LoginComponent {
  username: string = '';
  password: string = '';
  authService: AuthService = inject(AuthService)


  constructor() { }

  onSubmit(): void {
    this.authService.login(this.username, this.password).then(
        (response: any) => {
          // Handle successful login response
          console.log('Login successful', response);
          // Perform actions like storing tokens, redirecting to dashboard, etc.
        },
        (error: any) => {
          // Handle login error
          console.error('Login failed', error);
        }
      );
  }
  
}
