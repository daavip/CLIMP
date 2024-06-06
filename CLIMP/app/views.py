from django.shortcuts import render, redirect 
from .forms import *

# Create your views here.


def home(request):
    if request.method == 'POST':
        form = MachineForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        
    else:
        form = MachineForm()
    
    machines = Machine.objects.all()
    return render(request, 'home.html', {'form' : form, 'machines' : machines})

def dash(request):
    return render(request, 'dash.html')

def defeito(request):
    return render(request, 'defeito.html')
