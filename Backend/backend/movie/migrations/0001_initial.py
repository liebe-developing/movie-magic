# Generated by Django 4.2.5 on 2023-09-15 09:33

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actors',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='نام')),
                ('slug', models.SlugField(allow_unicode=True, blank=True, null=True, unique=True, verbose_name='اسلاگ')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True, verbose_name='تاریخ آپلود دسته بندی')),
                ('updated_at', models.DateTimeField(auto_now=True, null=True, verbose_name='تاریخ به روز رسانی دسته بندی')),
            ],
            options={
                'verbose_name': 'بازیگر',
                'verbose_name_plural': 'بازیگران',
                'ordering': ['-updated_at'],
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30, verbose_name='عنوان')),
                ('slug', models.SlugField(allow_unicode=True, blank=True, null=True, unique=True, verbose_name='اسلاگ')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True, verbose_name='تاریخ آپلود دسته بندی')),
                ('updated_at', models.DateTimeField(auto_now=True, null=True, verbose_name='تاریخ به روز رسانی دسته بندی')),
            ],
            options={
                'verbose_name': 'دسته بندی',
                'verbose_name_plural': 'دسته بندی\u200cها',
                'ordering': ['-updated_at'],
            },
        ),
        migrations.CreateModel(
            name='Director',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='نام')),
                ('slug', models.SlugField(allow_unicode=True, blank=True, null=True, unique=True, verbose_name='اسلاگ')),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True, verbose_name='تاریخ آپلود دسته بندی')),
                ('updated_at', models.DateTimeField(auto_now=True, null=True, verbose_name='تاریخ به روز رسانی دسته بندی')),
            ],
            options={
                'verbose_name': 'کارگردان',
                'verbose_name_plural': 'کارگردان ها',
                'ordering': ['-updated_at'],
            },
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='عنوان')),
                ('description', models.TextField(verbose_name='توضیحات')),
                ('image', models.ImageField(null=True, upload_to='images/thumbnails', verbose_name='تصویر ویدئو')),
                ('video', models.FileField(null=True, upload_to='videos/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])], verbose_name='ویدئو')),
                ('age', models.CharField(blank=True, choices=[('20', '+20'), ('14', '+14'), ('10', '+10')], max_length=10, null=True, verbose_name='رده سنی')),
                ('time', models.CharField(blank=True, max_length=30, null=True, verbose_name='مدت زمان')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='تاریخ آپلود ویدئو')),
                ('updated_at', models.DateTimeField(auto_now=True, null=True, verbose_name='تاریخ به روز رسانی ویدئو')),
                ('slug', models.SlugField(allow_unicode=True, blank=True, null=True, unique=True, verbose_name='اسلاگ')),
                ('actors', models.ManyToManyField(related_name='videos', to='movie.actors', verbose_name='بازیگران')),
                ('category', models.ManyToManyField(related_name='videos', to='movie.category', verbose_name='دسته بندی')),
                ('director', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videos', to='movie.director', verbose_name='کارگردان')),
            ],
            options={
                'verbose_name': 'ویدئو',
                'verbose_name_plural': 'ویدئوها',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Serial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=120, null=True, verbose_name='نام سریال')),
                ('image', models.ImageField(upload_to='serial', verbose_name='تصویر جلد سریال')),
                ('slug', models.SlugField(allow_unicode=True, blank=True, null=True, unique=True, verbose_name='اسلاگ')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='تاریخ آپلود سریال ')),
                ('age', models.CharField(blank=True, choices=[('20', '+20'), ('14', '+14'), ('10', '+10')], max_length=10, null=True, verbose_name='رده سنی')),
                ('year', models.IntegerField(blank=True, null=True, verbose_name='سال ساخت سریال')),
                ('number_part', models.IntegerField(blank=True, null=True, verbose_name='تعداد قسمت ها')),
                ('video', models.ManyToManyField(blank=True, related_name='playes', to='movie.video', verbose_name='ویدیوها')),
            ],
            options={
                'verbose_name': 'سریال',
                'verbose_name_plural': 'سریال ها',
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='Season',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=10, null=True, verbose_name='شماره فصل')),
                ('subject', models.CharField(blank=True, max_length=10, null=True, verbose_name='موضوع فصل')),
                ('image', models.ImageField(upload_to='serial/season', verbose_name='تصویر جلد فصل')),
                ('slug', models.SlugField(allow_unicode=True, blank=True, null=True, unique=True, verbose_name='اسلاگ')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='تاریخ آپلود فصل ')),
                ('season', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='seasons', to='movie.serial', verbose_name='سریال')),
                ('video', models.ManyToManyField(related_name='videos', to='movie.video', verbose_name='ویدیوها')),
            ],
            options={
                'verbose_name': 'فصل',
                'verbose_name_plural': 'فصل ها',
                'ordering': ['-created_at'],
            },
        ),
    ]
