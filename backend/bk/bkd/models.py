from django.db import models

# Create your models here.

class ListOfDiscipline(models.Model):
    discipline_id = models.AutoField(primary_key=True)
    discipline = models.CharField(max_length=100)
    teacher = models.CharField(max_length=100)

class Group(models.Model):
    group_id = models.AutoField(primary_key=True)
    speciality = models.CharField(max_length=100)
    course = models.IntegerField()
    discipline = models.ManyToManyField(ListOfDiscipline, related_name='groups')

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    oid = models.CharField(max_length=100, blank=True, null=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    group = models.ForeignKey(Group, on_delete=models.SET_NULL, null=True, blank=True, related_name='users')
    marks_bool = models.BooleanField(default=False)


class Marks(models.Model):
    mark_id = models.AutoField(primary_key=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name='marks')
    discipline = models.ForeignKey(ListOfDiscipline, on_delete=models.CASCADE, related_name='marks')
    mark_l = models.IntegerField()
    mark_m = models.IntegerField()
    mark_o = models.IntegerField()


# class User(models.Model):
#     user_id = models.PositiveIntegerField(primary_key=True)
#     oid = models.CharField(max_length=50)
#     name = models.CharField(max_length=50)
#     email = models.CharField(max_length=255)

# class Group(models.Model):
#     group_id = models.PositiveIntegerField(primary_key=True)
#     speciality = models.CharField(max_length=15)
#     course = models.PositiveIntegerField()

# class ListOfDiscipline(models.Model):
#     discipline_id = models.PositiveIntegerField(primary_key=True)
#     discipline = models.CharField(max_length=255)
#     teacher = models.CharField(max_length=255)

# class Marks(models.Model):
#     group_id = models.PositiveIntegerField(primary_key=True)
#     speciality = models.CharField(max_length=15)
#     course = models.PositiveIntegerField()