from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from datetime import date
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm
from .forms import RegistrationForm, BookingForm
from .models import Destination, Booking
from .forms import BookingForm  # Create a form for booking if needed
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .models import Feature, Destination, Booking
from .serializers import FeatureSerializer, DestinationSerializer, BookingSerializer, UserLoginSerializer

class FeatureViewSet(viewsets.ModelViewSet):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

class DestinationViewSet(viewsets.ModelViewSet):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

class UserLoginView(APIView):
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            # Perform any actions upon successful login (e.g., generate token, set session, etc.)
            return Response({'detail': 'Login successful'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def destination_list(request):
    search = request.GET.get('search', '')  # Get the search query parameter from the URL
    destinations = Destination.objects.all()

    if search:
        destinations = destinations.filter(name__icontains=search)  # Filter destinations by name

    return render(request, 'TravelAgency/destination_list.html', {'destinations': destinations, 'search': search})

def detailed_destination(request, pk):
    destination = get_object_or_404(Destination, pk=pk)
    # You can perform any additional processing or data retrieval here if needed
    return render(request, 'TravelAgency/destination_details.html', {'destination': destination})


def base(request):
    return render(request, 'TravelAgency/base.html', {'base': base})

# views.py

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('base')  # Redirect to the desired URL after successful login
    else:
        form = AuthenticationForm()
    return render(request, 'TravelAgency/login.html', {'form': form})

def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # Redirect to the login page after successful registration
    else:
        form = RegistrationForm()
    return render(request, 'TravelAgency/register.html', {'form': form})

def book_destination(request, destination_id):
    destination = Destination.objects.get(id=destination_id)
    #User should login before booking
    if request.user.is_authenticated == False:
        return redirect('login')
    if request.method == 'POST':
        form = BookingForm(request.POST)  # Create a form instance with the POST data

        if form.is_valid():
            if request.user.is_authenticated:
                booking = form.save(commit=False)
                booking.destination = destination
                booking.date = date.today()
                booking.user = request.user
                booking.save()
                return redirect('booking_confirmation', booking_id=booking.id)
            else:
                # User is not authenticated, redirect to the login page
                return redirect('login')

    else:
        form = BookingForm()  # Initialize the booking form

    return render(request, 'TravelAgency/booking_form.html', {'form': form, 'destination': destination})

def booking_confirmation(request, booking_id):
    booking = get_object_or_404(Booking, pk=booking_id)

    return render(request, 'TravelAgency/booking_confirmation.html', {'booking': booking})

def my_booked_trips(request):
    user_bookings = Booking.objects.filter(user=request.user)

    # Handle search filtering
    search = request.GET.get('search', '')
    if search:
        user_bookings = user_bookings.filter(destination__name__icontains=search)

    return render(request, 'TravelAgency/my_booked_trips.html', {'user_bookings': user_bookings, 'search': search})
