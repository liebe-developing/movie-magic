# Generated by Django 4.2.5 on 2023-09-19 06:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0002_alter_category_options_actors_image_director_image_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='season',
            options={'ordering': ['-created_at'], 'verbose_name': 'فصل c', 'verbose_name_plural': 'فصل ها'},
        ),
    ]