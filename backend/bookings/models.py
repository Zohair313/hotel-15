from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    arrival_date = models.DateTimeField()
    departure_date = models.DateTimeField()
    luggage_count = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='pending')

    def __str__(self):
        return f"{self.name} - {self.arrival_date.date()}"
