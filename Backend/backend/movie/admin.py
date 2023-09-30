from django.contrib import admin

# local
from .models import *

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ['title']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(Actors)
class ActorsAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Director)
class ActorsAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}



@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    search_fields = ['title']
    list_display = ['title']
    list_filter = ['category']
    ordering = ['-created_at']
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Season)
class SeasonAdmin(admin.ModelAdmin):
    model=Season
    prepopulated_fields = {'slug': ('subject',)}


@admin.register(Serial)
class SerialAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_display = ['name','year']
    ordering = ['-created_at']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Cinematic)
class SerialAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_display = ['name','year']
    ordering = ['-created_at']
    prepopulated_fields = {'slug': ('name',)}


