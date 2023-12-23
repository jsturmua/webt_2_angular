import { Injectable } from '@angular/core';
import { Destination } from '../models/destination';

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

  async getDestinationDetail(id: number): Promise<Destination> {
    const url : string = this.apiUrl + "destinations/" + id;
    const data : Response = await fetch(url);
    return await data.json() ?? [];
  }
}

