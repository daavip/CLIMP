from django.contrib import admin
from .models import *

class BaseModelAdmin(admin.ModelAdmin):
    ordering = ['id']
    list_per_page = 10

    def get_user(self, obj):
        return obj.user.username if obj.user else ''
    get_user.short_description = 'User'

class MachineAdmin(BaseModelAdmin):
    list_display = ("id", "name", "serial", "status", "created_at", "updated_at",)
    
admin.site.register(Machine, MachineAdmin)

class DefectAdmin(BaseModelAdmin):
    list_display = ("id", "name", "created_at", "updated_at",)

admin.site.register(Defect, DefectAdmin)

class CallAdmin(BaseModelAdmin):
    list_display = ("id", "get_defect", "get_machine", "start_date", "end_date", "open", "created_at", "updated_at",)
    
    def get_defect(self, obj):
        return obj.defect.name if obj.defect else ''
    get_defect.short_description = 'Defect'
    
    def get_machine(self, obj):
        return obj.machine.name if obj.machine else ''
    get_machine.short_description = 'Machine'
    
admin.site.register(Call, CallAdmin)

class RoutineAdmin(BaseModelAdmin):
    list_display = ("id", "get_user", "get_machine", "worked_hours", "start_date", "end_date", "running", "area", "created_at", "updated_at",)
    
    def get_user(self, obj):
        return obj.user.username if obj.user else ''
    get_user.short_description = 'User'
    
    def get_machine(self, obj):
        return obj.machine.name if obj.machine else ''
    get_machine.short_description = 'Machine'
    
admin.site.register(Routine, RoutineAdmin)

