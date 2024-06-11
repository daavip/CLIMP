from django import forms
from .models import *

class MachineForm(forms.ModelForm):
    class Meta:
        model = Machine
        fields = ['name', 'serial', 'status']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'serial': forms.TextInput(attrs={'class': 'form-control', 'maxlength': 5, 'pattern': '\d*'}),
            'status': forms.HiddenInput(attrs={}),
        }

class DefectForm(forms.ModelForm):
    class Meta:
        model = Defect
        fields = ['name']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
        }

# class SectorForm(forms.ModelForm):
#     class Meta:
#         model = Sector
#         fields = ['name']

# class CallForm(forms.ModelForm):
#     class Meta:
#         model = Call
#         fields = ['defect', 'machine', 'start_date', 'end_date', 'open']


# class RoutineForm(forms.ModelForm):
#     class Meta:
#         model = Routine
#         fields = ['user', 'machine', 'worded_hours', 'start_date', 'end_date', 'running', 'area']