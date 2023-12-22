from django.contrib import admin
from django.urls import path, include
from . import views
from django.contrib.auth.views import *
from rest_framework.routers import DefaultRouter
from .views import FeatureViewSet, DestinationViewSet, BookingViewSet

router = DefaultRouter()
router.register(r'features', FeatureViewSet)
router.register(r'destinations', DestinationViewSet)
router.register(r'bookings', BookingViewSet)

urlpatterns = [
    # Your other URLs
    path('api/', include(router.urls)),
]
# urlpatterns = [

#     path('destinations/', views.destination_list, name='destinations_list'),
#     path('', views.base, name='base'),
#     path('login/', views.login_view, name='login'),
#     path('register/', views.register, name='register'),
#     path('logout/', LogoutView.as_view(next_page='base'), name='logout'),
#     path('destination/<int:pk>/', views.detailed_destination,
#          name='detailed_destination'),
#     path('destination/<int:destination_id>/book/',
#          views.book_destination, name='book_destination'),
#     path('booking_confirmation/<int:booking_id>/',
#          views.booking_confirmation, name='booking_confirmation'),
#     path('my_booked_trips/', views.my_booked_trips, name='my_booked_trips'),
#     path('password_change/', PasswordChangeView.as_view(
#         template_name='TravelAgency/password_change_form.html',
#         success_url='/password_change/done/'
#     ), name='password_change'),

#     path('password_change/done/', PasswordChangeDoneView.as_view(
#         template_name='TravelAgency/password_change_done.html'
#     ), name='password_change_done'),
# ]
