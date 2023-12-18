from django.shortcuts import render
from .models import *
from django.http import JsonResponse
import json

# Create your views here.

def index(request):
    return JsonResponse({
            "ok": True,
            "hw": "Hello World!"
        })

def create_user(request):
    if request.method == "POST":
        data = json.loads(request.body.decode('utf-8'))
        group, created = Group.objects.get_or_create( 
            speciality=data["speciality"], 
            course=data["course"] 
        ) 
        User.objects.create( 
            oid=data["oid"], 
            name=data["name"], 
            email=data["preferred_username"], 
            group = group
        ) 

        return JsonResponse({
            "ok": True
        })
    else:
        return JsonResponse({
                "ok": False,
                "cause": "Wrong method"
        })

def group_by_id(request, group_id):
    grp = Group.objects.get(group_id=group_id)
    dscs = ListOfDiscipline.objects.filter(group=grp)
    print(grp)
    acc = []
    for ds in dscs:
        acc.append({
            "discipline_id": ds.discipline_id,
            "discipline": ds.discipline,
            "teacher": ds.teacher
        })
    return JsonResponse({
        "ok": True,
        "data": acc
    })
