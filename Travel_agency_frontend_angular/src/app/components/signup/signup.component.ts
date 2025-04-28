import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Import your authentication service
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.signUpForm = this.formBuilder.group({
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      this.authService.signUp(this.signUpForm.value)
        .then(
          (response: any) => {
            // Handle successful signup
            console.log('Signup successful', response);
            window.alert("Signup sucessful");
            this.router.navigate(['']);
            // Redirect or perform actions after successful signup
          },
          (error: any) => {
            window.alert("Wrong credentials, please again");
            console.error('Signup failed', error);
          }
        );
    }
  }
}
