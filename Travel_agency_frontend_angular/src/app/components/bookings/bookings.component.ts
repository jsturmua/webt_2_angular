import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DestinationService } from '../../services/destination.service'; // Import service to fetch destination details
import { BookingService } from '../../services/booking.service'; // Import service to handle bookings
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingComponent {
  destination: any; // Object to store fetched destination details
  booking: any = {}; // Object to store booking form data
  bookingForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private destinationService: DestinationService,
    private bookingService: BookingService,
    private router: Router,
  ) {
 // Get destination ID from route params
    this.fetchDestinationDetails(); // Fetch destination details
    this.initBookingForm();
  }

  fetchDestinationDetails(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    // Fetch destination details using the destination service
    this.destinationService.getDestinationDetail(id).then((data: any):void => {
      this.destination = data; // Assign fetched destination details
    });
  }
  
  initBookingForm(): void {
    this.bookingForm = this.formBuilder.group({
      date: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passportnumber: ['', Validators.required],
      age: ['', Validators.required],
      amount_persons: ['', Validators.required],
      user: [1],
      destination: [Number(this.route.snapshot.paramMap.get('id'))]
    });
  }

  onSubmit(): void {
    // Submit booking form data using the booking service
    this.bookingService.createBooking(this.bookingForm.value).then(
      (response: any) => {
        // Handle successful booking submission
        console.log('Booking successful', response);
        this.router.navigate(['/bookings']);
      },
      (error: any) => {
        // Handle booking submission error
        console.error('Booking failed', error);
      }
    );
  }
}

