import { Component, inject } from '@angular/core';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent {
  bookings: Booking[] = [];
  bookingsservice: BookingService = inject(BookingService);

  constructor(private destinationservice: DestinationService) {
    let user = localStorage.getItem("user")
    this.bookingsservice.getAllBookings().then((bookings: Booking[]): void => {
      for (let booking of bookings) {
        if (booking.user == Number(user)){
          this.bookings.push(booking)
        }
      }

    })
  }
}
