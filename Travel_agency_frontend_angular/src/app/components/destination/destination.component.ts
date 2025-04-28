// destination.component.ts
import { Component, inject } from '@angular/core';
import { Destination } from '../../models/destination'; // Assuming Destination model interface
import { DestinationService } from '../../services/destination.service'; // Assuming DestinationService
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-destination',
  standalone: true,
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
  imports: [CommonModule, RouterLink],

})
export class DestinationComponent {
  destinations: Destination[] = [];
  destinationservice: DestinationService = inject(DestinationService)

  constructor() {
    this.destinationservice.getDestinations().then((destinations: Destination[]): void => {
      this.destinations = destinations
    })
  }

  // ngOnInit(): void {
  //   this.getDestinations();
  // }

  // getDestinations(): void {
  //   this.destinationService.getDestinations()
  //     .subscribe((destinations: Destination[]) => {
  //       this.destinations = destinations;
  //     });
  // }
}
