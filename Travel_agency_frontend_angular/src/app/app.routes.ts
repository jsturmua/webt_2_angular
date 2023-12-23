import { Routes } from '@angular/router';
import { DestinationComponent } from './components/destination/destination.component';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: 'destinations', component: DestinationComponent},
    {path: 'destination/:id', component: DestinationDetailComponent},
    {path: 'login', component: LoginComponent},
];
