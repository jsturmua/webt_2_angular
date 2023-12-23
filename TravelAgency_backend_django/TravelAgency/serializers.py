from rest_framework import serializers
from .models import Feature, Destination, Booking
from django.contrib.auth.models import User


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = '__all__'

class DestinationSerializer(serializers.ModelSerializer):
    features = FeatureSerializer(many=True, read_only=True)  # Assuming a ManyToMany relationship with Feature

    class Meta:
        model = Destination
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username']