from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class BaseModel(models.Model):
    id = models.AutoField(primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True
            
    def __str__(self):
        return f"{self.__class__.__name__} {self.id}"

class Sector(BaseModel):
    name = models.CharField(max_length=50, null=False, blank=False)

class Machine(BaseModel):
    name = models.CharField(max_length=50, null=False, blank=False)
    serial = models.IntegerField(max_length=5, null=False, blank=False)
    status = models.BooleanField(default=False)
    sector = models.ForeignKey(Sector, on_delete=models.CASCADE, null=True, blank=True)

class Defect(BaseModel):
    name = models.CharField(max_length=50, null=False, blank=False)

class Call(BaseModel):
    defect = models.ForeignKey(Defect, on_delete=models.CASCADE)
    machine = models.ForeignKey(Machine, on_delete=models.CASCADE)
    start_date = models.DateField(null=False, blank=False)
    end_date = models.DateField(null=True, blank=True)
    open = models.BooleanField(default=False)

class Routine(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    machine = models.ForeignKey(Machine, on_delete=models.CASCADE)
    worked_hours = models.IntegerField(default=0)
    start_date = models.DateField(null=False, blank=False)
    end_date = models.DateField(null=True, blank=True)
    running = models.BooleanField(default=False)
    area = models.IntegerField(default=0)