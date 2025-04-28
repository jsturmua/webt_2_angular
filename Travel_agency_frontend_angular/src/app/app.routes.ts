import { Routes } from '@angular/router';
import { DestinationComponent } from './components/destination/destination.component';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';
import { LoginComponent } from './components/login/login.component';
import { BookingComponent } from './components/bookings/bookings.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { SignUpComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'destinations', component: DestinationComponent},
    {path: 'destination/:id', component: DestinationDetailComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'destinations/:id/booking', component: BookingComponent},
    {path: 'mybookings', component: MyBookingsComponent},
    {path: 'signup', component:SignUpComponent},
];
