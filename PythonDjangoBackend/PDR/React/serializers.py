from attr import field
from rest_framework import serializers
from React.models import Department,Employee

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('DepartmentID','DepartmentName')


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('EmployeeID','EmployeeName','EmployeeAge','EmployeeDepartment','EmployeeStartDate','PhotofileName')