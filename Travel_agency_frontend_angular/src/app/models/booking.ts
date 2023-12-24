export interface Booking {
    id: number; // Booking ID
    user: number; // User ID linked to the booking
    destination: number; // Destination ID linked to the booking
    date: string; // Date of the booking (you can use Date type if needed)
    name: string; // Name of the person making the booking
    email: string; // Email of the person making the booking
    passportnumber: string; // Passport number of the person making the booking
    age: number; // Age of the person making the booking
    amount_persons: number; // Number of persons for the booking
    // Other properties as per your Django Booking model
  }
  