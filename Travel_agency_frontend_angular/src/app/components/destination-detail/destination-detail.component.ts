import { Component, Input, inject } from '@angular/core';
import { DestinationService } from '../../services/destination.service';
import { Destination } from '../../models/destination';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './destination-detail.component.html',
  styleUrl: './destination-detail.component.css'
})
export class DestinationDetailComponent {
  @Input() destination: Destination | undefined = undefined
  destinationservice: DestinationService = inject(DestinationService)

  constructor(private route: ActivatedRoute, private location: Location) {
    this.getDestination();
  }

  getDestination(): void {
    let id: any = this.route.snapshot.paramMap.get("id")
    this.destinationservice.getDestinationDetail(id).then((destination: Destination): void => {
      this.destination = destination
    })
  }
}
