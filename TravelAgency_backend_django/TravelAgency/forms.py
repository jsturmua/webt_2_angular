from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Booking



class RegistrationForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

class BookingForm(forms.ModelForm):
    class Meta:
        model = Booking
        fields = ['amount_persons', 'name', 'age', 'email', 'passportnumber' ]  # Add other fields as needed
        error_messages = {
            'name': {'required': 'Please enter a name.'},
            'age': {'required': 'Please enter an age.'},
            'email': {'required': 'Please enter an email address.'},
            'passportnumber': {'required': 'Please enter a passport number.'},
            'amount_persons': {'required': 'Please enter the amount of persons.'},
        }

    # You can add custom form field validation or widgets here if necessary

