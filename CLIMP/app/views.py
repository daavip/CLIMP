from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html')

def dash(request):
    return render(request, 'dash.html')

def defeito(request):
    return render(request, 'defeito.html')