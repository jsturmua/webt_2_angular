export interface Destination {
  id: number; // Django generates an ID for each Destination
  name: string;
  description: string;
  image?: string; // Depending on how the image URL is stored in Django
  price: number;
  rating: number;
  features: Feature[]; // Assuming Feature is another interface representing the Feature model
}

// Define Feature interface if needed
export interface Feature {
  // Define Feature properties based on your Django Feature model
  // For example:
  name: string;
  // Other properties...
}
