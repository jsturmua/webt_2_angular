export interface Destination {
    id: number;
    name: string;
    description: string;
    image?: string; // Assuming image is optional and represented as a string (path or URL)
    price: number;
    rating: number;
    // Define other properties as per your Django Destination model
  }
  