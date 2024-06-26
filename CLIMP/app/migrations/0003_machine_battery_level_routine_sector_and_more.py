# Generated by Django 5.0.2 on 2024-06-12 00:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_rename_active_machine_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='machine',
            name='battery_level',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='routine',
            name='sector',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='app.sector'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='call',
            name='start_date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='machine',
            name='serial',
            field=models.IntegerField(max_length=5),
        ),
        migrations.AlterField(
            model_name='routine',
            name='start_date',
            field=models.DateField(),
        ),
    ]
