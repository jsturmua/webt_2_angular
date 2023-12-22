import { Injectable } from '@angular/core';
import { Destination } from '../models/destination';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private apiUrl :string = "http://localhost:8000/api/";

  constructor() {}

  async getDestinations(): Promise<Destination[]> {
    const url : string = this.apiUrl + "destinations";
    const data : Response = await fetch(url);
    return await data.json() ?? [];
  }
}

