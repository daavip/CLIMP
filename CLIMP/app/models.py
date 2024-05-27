from django.db import models

# Create your models here.

class BaseModel(models.Model):
    id = models.AutoField(primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True
        
    def save(self, *args, **kwargs):
        if not self.pk:
            for field in self._meta.fields:
                if isinstance(field, models.ForeignKey):
                    field_name = f"{field.name}_id"
                    related_object = getattr(self, field.name)
                    setattr(self, field_name, related_object.id)
        super().save(*args, **kwargs)
        
    def __str__(self):
        return f"{self.__class__.__name__} {self.id}"
   
class Machine(BaseModel):
    name = models.CharField(max_length=50, null=False, blank=False)
    
# User
# -email
# -password
# -id_role


# Role
# -name


# Machine
# -id_defect
# -name
# -serial
# -active


# Routine
# -id_user
# -id_machine
# -worked_hours
# -start_date
# -end_date
# -running
# -area


# Defect
# -id_machine
# -name
# -open
# -start_date
# -end_date