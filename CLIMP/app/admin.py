from django.contrib import admin
from .models import *

class BaseModelAdmin(admin.ModelAdmin):
    ordering = ['id']
    list_per_page = 10

    def get_user(sel, obj):
        return obj.user.username if obj.user else ''
    get_user.short_description = 'User'

class MachineAdmin(BaseModelAdmin):
    list_display = ("id", "name", "serial", "active", "created_at", "updated_at",)

admin.site.register(Machine, MachineAdmin)

class DefectAdmin(BaseModelAdmin):
    list_display = ("id", "name", "created_at", "updated_at",)

admin.site.register(Defect, DefectAdmin)

class CallAdmin(BaseModelAdmin):
    list_display = ("id", "get_defect", "get_machine", "start_date", "end_date", "open", "created_at", "updated_at",)

admin.site.register(Call, CallAdmin)

class RoutineAdmin(BaseModelAdmin):
    list_display = ("id", "get_user", "get_machine", "worked_hours", "start_date", "end_date", "running", "area", "created_at", "updated_at",)

admin.site.register(Routine, RoutineAdmin)

