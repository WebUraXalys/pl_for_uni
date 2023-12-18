# Generated by Django 5.0 on 2023-12-16 21:13

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ListOfDiscipline',
            fields=[
                ('discipline_id', models.AutoField(primary_key=True, serialize=False)),
                ('discipline', models.CharField(max_length=100)),
                ('teacher', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Group',
            fields=[
                ('group_id', models.AutoField(primary_key=True, serialize=False)),
                ('speciality', models.CharField(max_length=100)),
                ('course', models.IntegerField()),
                ('discipline', models.ManyToManyField(related_name='groups', to='bkd.listofdiscipline')),
            ],
        ),
        migrations.CreateModel(
            name='Marks',
            fields=[
                ('mark_id', models.AutoField(primary_key=True, serialize=False)),
                ('mark_l', models.IntegerField()),
                ('mark_m', models.IntegerField()),
                ('mark_o', models.IntegerField()),
                ('discipline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='marks', to='bkd.listofdiscipline')),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='marks', to='bkd.group')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('oid', models.CharField(blank=True, max_length=100, null=True)),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('marks_bool', models.BooleanField(default=False)),
                ('group', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='users', to='bkd.group')),
            ],
        ),
    ]
