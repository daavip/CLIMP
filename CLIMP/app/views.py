from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
import json

def home_view(request):
    machines = Machine.objects.all()
    return render(request, 'home.html', {'machines': machines})

def create_machine(request):
    if request.method == 'POST':
        name = request.POST['name']
        serial = request.POST['serial']
        status = request.POST['status']
        Machine.objects.create(name=name, serial=serial, status=status)
        return redirect('home')
    
@csrf_exempt
def update_machine_status(request, machine_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        status = data.get('status')
        machine = Machine.objects.get(id=machine_id)
        machine.status = status
        machine.save()
        return JsonResponse({'status': 'success'})    
    
def defect_view(request):
    defects = Defect.objects.all()
    machines = Machine.objects.all()
    return render(request, 'defeito.html', {'defects': defects, 'machines': machines})

def create_defect(request):
    if request.method == 'POST':
        name = request.POST['name']
        Defect.objects.create(name=name)
        return redirect('defeito')
    
@csrf_exempt
def resolve_defect(request, defect_id):
    if request.method == 'POST':
        defect = Defect.objects.get(id=defect_id)
        defect.delete()
        return JsonResponse({'status': 'success'})


def sector_view(request):
    sector = Sector.objects.all()
    return render(request, 'setor.html', {'sectors': sector})

def create_sector(request):
    if request.method == 'POST':
        name = request.POST['name']
        Sector.objects.create(name=name)
        return redirect('setores')  
    
@csrf_exempt
def delete_sector(request, sector_id):
    if request.method == 'POST':
        sector = Sector.objects.get(id=sector_id)
        sector.delete()
        return JsonResponse({'status': 'success'})


def call_view(request):
    call = Call.objects.all()
    defect = Defect.objects.all()
    machine = Machine.objects.all()
    user = User.objects.all()
    return render(request, 'chamados.html', {'calls':call, 'defects': defect, 'machines':machine, 'users':user})

def create_call(request):
    if request.method == 'POST':
        defect_id = request.POST['defect']
        machine_id = request.POST['machine']
        start_date = request.POST['start_date']
        end_date = request.POST.get('end_date', None)  # Use get() to allow for None
        open = request.POST['open']

        # Fetch the actual objects from the database
        defect = Defect.objects.get(id=defect_id)
        machine = Machine.objects.get(id=machine_id)

        # Create the new call instance
        Call.objects.create(
            defect=defect,
            machine=machine,
            start_date=start_date,
            end_date=end_date,
            open=open,
        )
        return redirect('chamados')
    
@csrf_exempt
def delete_call(request, call_id):
    if request.method == 'POST':
        call = Call.objects.get(id=call_id)
        call.delete()
        return JsonResponse({'status': 'success'})
    
@csrf_exempt
def update_call_open(request, call_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        open = data.get('open')
        call = Call.objects.get(id=call_id)
        call.open = open
        call.save()
        return JsonResponse({'status': 'success'})
    

def routine_view(request):
    routine = Routine.objects.all()
    user = User.objects.all()
    machine = Machine.objects.all()
    sector = Sector.objects.all()
    return render(request, 'rotinas.html', {'routines': routine, 'users':user, 'machines':machine, 'sectors':sector})

def create_routine(request):
    if request.method == 'POST':
        user_id = request.POST['user']
        machine_id = request.POST['machine']
        sector_id = request.POST['sector']
        worked_hours = 0
        start_date = request.POST['start_date']
        end_date = request.POST.get('end_date', None)  # Use get() to allow for None
        running = request.POST['running']
        area = request.POST['area']

        # Fetch the actual objects from the database
        user = User.objects.get(id=user_id)
        machine = Machine.objects.get(id=machine_id)
        sector = Sector.objects.get(id=sector_id)

        # Create the new Routine instance
        Routine.objects.create(
            user=user,
            machine=machine,
            sector=sector,
            worked_hours=worked_hours,
            start_date=start_date,
            end_date=end_date,
            running=running,
            area=area
        )
        return redirect('rotinas')
    
@csrf_exempt
def delete_routine(request, routine_id):
    if request.method == 'POST':
        routine = Routine.objects.get(id=routine_id)
        routine.delete()
        return JsonResponse({'status': 'success'})
    
@csrf_exempt
def update_routine_running(request, routine_id):
    if request.method == 'POST':
        data = json.loads(request.body)
        running = data.get('running')
        routine = Routine.objects.get(id=routine_id)
        routine.running = running
        routine.save()
        return JsonResponse({'status': 'success'})


def dashboard_view(request):
    defects = Defect.objects.all()
    machines = Machine.objects.all()
    calls = Call.objects.all()

    return render(request, 'dashboard.html', {'defects': defects, 'machines': machines, 'call':calls})

def config_view(request):
    return render(request, 'config.html')