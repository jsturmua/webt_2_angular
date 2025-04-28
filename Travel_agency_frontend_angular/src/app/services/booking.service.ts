import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl: string = 'http://localhost:8000/api/bookings/'; // Replace with your API endpoint

  constructor() {}

  createBooking(bookingData: any) {
    const url: string = `${this.apiUrl}`; // Replace with your booking creation endpoint
    console.log(JSON.stringify(bookingData))
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    }).then(response => response.json());
  }

  async getAllBookings(): Promise<any[]> {
    return fetch(this.apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
        return [];
      });
  }
}
