from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from React.models import Department,Employee
from React.serializers import DepartmentSerializer, EmployeeSerializer

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def  departmentApi(request,id=0):
    if request.method == 'GET':
        department = Department.objects.all()
        department_serializer = DepartmentSerializer(department,many=True)

        return JsonResponse(department_serializer.data,safe=False)
    elif request.method == 'POST':
        department_data = JSONParser().parse(request)
        department_serializer = DepartmentSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Department Added",safe=False)
        return JsonResponse("Failed to add department",safe=False)
    
    elif request.method == 'PUT':
        department_data = JSONParser().parse(request)
        department = Department.objects.get(DepartmentID = department_data['DepartmentID'])
        department_serializer = DepartmentSerializer(department,data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Update Successful",safe=False)
        return JsonResponse("failed to update",safe=False)

    elif request.method == 'DELETE':
        department = Department.objects.get(DepartmentID = id)
        department.delete()
        return JsonResponse("deleted department",safe=False)


@csrf_exempt
def  EmployeeApi(request,id=0):
    if request.method == 'GET':
        employee = Employee.objects.all()
        employee_serializer = EmployeeSerializer(employee,many=True)

        return JsonResponse(employee_serializer.data,safe=False)
    elif request.method == 'POST':
        employee_data = JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("employee Added",safe=False)
        return JsonResponse("Failed to add employee",safe=False)
    
    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        employee = Employee.objects.get(EmployeeID = employee_data['EmployeeID'])
        employee_serializer = EmployeeSerializer(employee,data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Update Successful",safe=False)
        return JsonResponse("failed to update",safe=False)

    elif request.method == 'DELETE':
        employee = Employee.objects.get(EmployeeID = id)
        employee.delete()
        return JsonResponse("deleted employee",safe=False)


@csrf_exempt
def UploadApi(request):
    file = request.FILES['file']
    file_name = default_storage.save(file.name,file)
    return JsonResponse(file_name, safe = False)

