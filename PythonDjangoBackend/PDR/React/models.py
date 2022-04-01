
from django.db import models

# Create your models here.
class Department(models.Model):
    DepartmentID = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=100)

class Employee(models.Model):
    EmployeeID = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=500)
    EmployeeAge = models.IntegerField()
    EmployeeDepartment = models.CharField(max_length=100)
    EmployeeStartDate = models.DateField()
    PhotofileName =  models.CharField(max_length=100)