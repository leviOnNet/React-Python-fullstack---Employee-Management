# Generated by Django 4.0 on 2022-03-15 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('DepartmentID', models.AutoField(primary_key=True, serialize=False)),
                ('DepartmentName', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('EmployeeID', models.AutoField(primary_key=True, serialize=False)),
                ('EmployeeName', models.CharField(max_length=500)),
                ('EmployeeAge', models.IntegerField(max_length=3)),
                ('EmployeeDepartment', models.CharField(max_length=100)),
                ('EmployeeStartDate', models.DateField()),
                ('PhotofileName', models.CharField(max_length=100)),
            ],
        ),
    ]
