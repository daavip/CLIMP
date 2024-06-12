from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('machine/create/', views.create_machine, name='create_machine'),
    path('machine/status/<int:machine_id>/', views.update_machine_status, name='update_machine_status'),

    path('defeito/', views.defect_view, name='defeito'),
    path('defect/create/', views.create_defect, name='create_defect'),
    path('defect/resolve/<int:defect_id>/', views.resolve_defect, name='resolve_defect'),

    path('setores/', views.sector_view, name='setores'),
    path('sector/create/', views.create_sector, name='create_sector'),
    path('sector/delete/<int:sector_id>/', views.delete_sector, name='delete_sector'),

    path('rotinas/', views.routine_view, name='rotinas'),
    path('routine/create/', views.create_routine, name='create_routine'),
    path('routine/delete/<int:routine_id>/', views.delete_routine, name='delete_routine'),
    path('routine/running/<int:routine_id>/', views.update_routine_running, name='update_routine_running'),

    path('chamados/', views.call_view, name='chamados'),
    path('call/create/', views.create_call, name='create_call'),
    path('call/delete/<int:call_id>/', views.delete_call, name='delete_call'),
    path('call/open/<int:call_id>/', views.update_call_open, name='update_call_open'),
    
    path('dashboard/', views.dashboard_view, name='dash'),
    path('config/', views.config_view, name='config'),
]
