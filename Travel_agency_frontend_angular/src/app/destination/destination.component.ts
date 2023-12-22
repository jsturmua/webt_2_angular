// destination.component.ts
import { Component, OnInit } from '@angular/core';
import { Destination } from '../models/destination'; // Assuming Destination model interface
import { DestinationService } from '../services/destination.service'; // Assuming DestinationService

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  destinations: Destination[] = [];

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.getDestinations();
  }

  getDestinations(): void {
    this.destinationService.getDestinations()
      .subscribe((destinations: Destination[]) => {
        this.destinations = destinations;
      });
  }
}
