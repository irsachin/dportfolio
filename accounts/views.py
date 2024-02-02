from django.shortcuts import render
from django.http import HttpResponse
def home(request):
    people=[
        {'name':"sachin singh rathore",'age':25},
        {'name':"Mahen",'age':17},
        {'name':"suren",'age':45},
        {'name':"Raja",'age':15}
    ]
    
    return render(request, 'accounts/index.html', {'people': people})

def data(request):
    return HttpResponse("This is data page")

def header(request):
    return render(request,'accounts/header.html')

def login(request):
    return render(request, 'accounts/login.html')

    
