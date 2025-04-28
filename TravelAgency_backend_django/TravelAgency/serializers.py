from rest_framework import serializers
from .models import Feature, Destination, Booking
from django.contrib.auth import authenticate
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

class UserSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)

            if user:
                if not user.is_active:
                    raise serializers.ValidationError("User account is disabled.")
                return user
            else:
                raise serializers.ValidationError("Incorrect username or password.")
        else:
            raise serializers.ValidationError("Must include 'username' and 'password'.")
