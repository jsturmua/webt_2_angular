from django.db import models
from django.contrib.auth.models import User  # If you want to associate bookings with users


class Feature(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class Destination(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='destination_images/', blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    features = models.ManyToManyField(Feature)

    def __str__(self):
        return self.name

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link to the user who made the booking
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)  # Link to the destination being booked
    date = models.DateField()
    name = models.CharField(max_length=100)
    email = models.EmailField()
    passportnumber = models.CharField(max_length=100)
    age = models.IntegerField()
    amount_persons = models.IntegerField()

    def __str__(self):
        return f"Booking for {self.destination.name} on {self.date}"
