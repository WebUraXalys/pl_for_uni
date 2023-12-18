from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("users/create/", views.create_user, name="cu"),
    path("discipline/bygroup/<int:group_id>", views.group_by_id, name="gbi"),
]
