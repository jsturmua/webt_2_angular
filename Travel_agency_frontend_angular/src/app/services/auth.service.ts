import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = "http://localhost:8000/api/";

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

      return await response.json();
    } catch (error) {
      // Handle error if needed
      console.error('Login failed:', error);
      return null;
    }
  }
}
