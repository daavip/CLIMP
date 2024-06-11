from django.shortcuts import render, redirect 
from .forms import *
from .models import *
from django.http import HttpResponse

def home(request):
  if request.method == 'POST':
    form = MachineForm(request.POST)
    if form.is_valid():
      print(form.cleaned_data)  # Imprime os dados validados do formulário
      form.save()
      return redirect('home')
  else:
    form = MachineForm()
  machines = Machine.objects.all()
  return render(request, 'home.html', {'form' : form, 'machines' : machines})

def dash(request):
  total_machines = Machine.objects.filter(status=True).count()
  total_defect = Call.objects.filter(open=True).count()
  total_hours = 10 #Trocar!!!
  schedule = "08:00 - 18:00"
  
  machines = Routine.objects.filter(running=True).select_related('machine', 'user') 
  
  context = {
    'total_machines' : total_machines,
    'total_defect' : total_defect,
    'total_hours' : total_hours,
    'schedule' : schedule,
    machines : [{
      'name' : routine.machine.name,
      'user' : routine.user,
      'sector' : routine.machine.sector.name if routine.machine.sector else 'N/A',
      'operating_time' : routine.worked_hours,
      'start_date' : routine.start_date,
      'end_date' : routine.end_date,
    } for routine in machines]
  }
  return render(request, 'dash.html', context)

def defeito(request):
    return render(request, 'defeito.html')

def config(request):
   return render(request, 'config.html')
