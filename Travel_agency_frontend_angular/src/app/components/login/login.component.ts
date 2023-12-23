import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.http.post<any>('http://your-backend-api/login/', loginData)
        .subscribe(
          (response) => {
            // Handle successful login response
            console.log('Login successful', response);
            // Perform actions like storing tokens, redirecting to dashboard, etc.
          },
          (error) => {
            // Handle login error
            console.error('Login failed', error);
          }
        );
    } else {
      // Handle form validation errors
      // For example, mark the fields as touched to display error messages
      this.loginForm.markAllAsTouched();
    }
  }
}
