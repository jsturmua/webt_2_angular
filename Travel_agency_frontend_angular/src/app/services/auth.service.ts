import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = "http://localhost:8000/api/";
  private authTokenKey: string = 'authToken';
  private user: string = "user"; 

  constructor() { }

  async login(username: string, password: string): Promise<any> {
    const url: string = this.apiUrl + "login/";

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const responseData = await response.json();
      localStorage.setItem(this.authTokenKey, responseData.token); // Store token in local storage
      localStorage.setItem(this.user, '1'); // Store token in local storage
      return responseData;
    } catch (error) {
      // Handle error if needed
      console.error('Login failed:', error);
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem(this.authTokenKey); // Remove token from local storage on logout
    localStorage.removeItem(this.user); // Remove user from local storage

  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.authTokenKey); // Check if token exists in local storage
  }

  getLoggedInUserId(): number | any {
    return localStorage.getItem(this.user);
  }

  async signUp(user: any): Promise<any> {
    const url: string = this.apiUrl + "signup/"; // Endpoint for signup in Django
    console.log(JSON.stringify(user))
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Signup failed');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Signup failed:', error);
      return null;
    });
  }
}
