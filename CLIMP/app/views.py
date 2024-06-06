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
    return render(request, 'home.html', {'form' : form})

def dash(request):
    return render(request, 'dash.html')

def defeito(request):
    return render(request, 'defeito.html')

def create_machine(request):
    if request.method == 'POST':
        form = MachineForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        
    else:
        form = MachineForm()
    return render(request, 'app/home.html', {'form' : form})