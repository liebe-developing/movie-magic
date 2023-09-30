from django.core.validators import FileExtensionValidator
from django.db import models


class Actors(models.Model):
    name = models.CharField('نام', max_length=30)
    slug = models.SlugField('اسلاگ', allow_unicode=True, blank=True, null=True, unique=True)
    image = models.ImageField('تصویر بازیگر', upload_to='images/actor_image', null=True)
    created_at = models.DateTimeField('تاریخ آپلود دسته بندی', auto_now_add=True, null=True)
    updated_at = models.DateTimeField('تاریخ به روز رسانی دسته بندی', auto_now=True, null=True)

    class Meta:
        verbose_name = 'بازیگر'
        verbose_name_plural = 'بازیگران'
        ordering = ['-updated_at']

    def __str__(self):
        return self.name

class Director(models.Model):
    name = models.CharField('نام', max_length=30)
    slug = models.SlugField('اسلاگ', allow_unicode=True, blank=True, null=True, unique=True)
    image = models.ImageField('تصویر کارگردان', upload_to='images/director_image', null=True)
    created_at = models.DateTimeField('تاریخ آپلود دسته بندی', auto_now_add=True, null=True)
    updated_at = models.DateTimeField('تاریخ به روز رسانی دسته بندی', auto_now=True, null=True)

    class Meta:
        verbose_name = 'کارگردان'
        verbose_name_plural = 'کارگردان ها'
        ordering = ['-updated_at']

    def __str__(self):
        return self.name

class Category(models.Model):
    title = models.CharField('عنوان', max_length=30)
    slug = models.SlugField('اسلاگ', allow_unicode=True, blank=True, null=True, unique=True)
    created_at = models.DateTimeField('تاریخ آپلود دسته بندی', auto_now_add=True, null=True)
    updated_at = models.DateTimeField('تاریخ به روز رسانی دسته بندی', auto_now=True, null=True)

    class Meta:
        verbose_name = 'ژانر'
        verbose_name_plural = 'ژانر ها'
        ordering = ['-updated_at']

    def __str__(self):
        return self.title


class Video(models.Model):
    AGE_CHOICES = (
        ('20', '+20'),
        ('14', '+14'),
        ('10', '+10'),
    )

    title = models.CharField('عنوان', max_length=50)
    category = models.ManyToManyField(Category, related_name='videos', verbose_name='دسته بندی')
    actors = models.ManyToManyField(Actors, related_name='videos', verbose_name='بازیگران')
    director = models.ForeignKey(Director, related_name='videos',on_delete =models.CASCADE, verbose_name='کارگردان')
    description = models.TextField('توضیحات')
    image = models.ImageField('تصویر ویدئو', upload_to='images/video_image', null=True)
    video = models.FileField('ویدئو', upload_to='videos/', null=True, validators=[
        FileExtensionValidator(allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv'])])
    age = models.CharField(max_length=10, choices=AGE_CHOICES, verbose_name="رده سنی", null=True, blank=True)
    time = models.CharField(max_length=30, verbose_name="مدت زمان", null=True, blank=True)
    created_at = models.DateTimeField('تاریخ آپلود ویدئو', auto_now_add=True)
    updated_at = models.DateTimeField('تاریخ به روز رسانی ویدئو', auto_now=True, null=True)
    slug = models.SlugField('اسلاگ', unique=True, null=True, blank=True, allow_unicode=True)

    class Meta:
        verbose_name = 'ویدئو'
        verbose_name_plural = 'ویدئوها'
        ordering = ["-created_at"]

    def __str__(self):
        return self.title



class Serial(models.Model):
    AGE_CHOICES = (
        ('20', '+20'),
        ('14', '+14'),
        ('10', '+10'),
    )
    video = models.ManyToManyField(Video, related_name='playes', verbose_name='ویدیوها', blank=True, )
    name = models.CharField(max_length=120, null=True, blank=True, verbose_name='نام سریال')
    image = models.ImageField(upload_to='serial', verbose_name='تصویر جلد سریال')
    slug = models.SlugField('اسلاگ', unique=True, null=True, blank=True, allow_unicode=True)
    created_at = models.DateTimeField('تاریخ آپلود سریال ', auto_now_add=True)
    age = models.CharField(max_length=10, choices=AGE_CHOICES, verbose_name="رده سنی", null=True, blank=True)
    year = models.IntegerField('سال ساخت سریال', null=True, blank=True)
    number_part = models.IntegerField('تعداد قسمت ها',null = True , blank = True)
    def __str__(self):
        return self.name


    class Meta:
        verbose_name = 'سریال'
        verbose_name_plural = 'سریال ها'
        ordering = ["-created_at"]



class Cinematic(models.Model):
    AGE_CHOICES = (
        ('20', '+20'),
        ('14', '+14'),
        ('10', '+10'),
    )
    video = models.ForeignKey(Video,on_delete=models.CASCADE, related_name='videos', verbose_name='ویدیوها')
    name = models.CharField(max_length=120, null=True, blank=True, verbose_name='نام سینمایی')
    image = models.ImageField(upload_to='serial', verbose_name='تصویر سینمایی ')
    slug = models.SlugField('اسلاگ', unique=True, null=True, blank=True, allow_unicode=True)
    created_at = models.DateTimeField('تاریخ آپلود سینمایی ', auto_now_add=True)
    age = models.CharField(max_length=10, choices=AGE_CHOICES, verbose_name="رده سنی", null=True, blank=True)
    year = models.IntegerField('سال ساخت سینمایی', null=True, blank=True)
    def __str__(self):
        return self.name


    class Meta:
        verbose_name = 'سینمایی'
        verbose_name_plural = 'سینمایی ها'
        ordering = ["-created_at"]




class Season(models.Model):
    name = models.CharField(max_length=10,  verbose_name="شماره فصل", null=True, blank=True)
    season = models.ForeignKey(Serial, on_delete=models.CASCADE, related_name='seasons', verbose_name="سریال",
                               null=True, blank=True)
    subject = models.CharField(max_length=10, verbose_name="موضوع فصل", null=True, blank=True)
    video = models.ManyToManyField(Video, related_name='season', verbose_name='ویدیوها')
    image = models.ImageField(upload_to='serial/season', verbose_name='تصویر جلد فصل')
    slug = models.SlugField('اسلاگ', unique=True, null=True, blank=True, allow_unicode=True)
    created_at = models.DateTimeField('تاریخ آپلود فصل ', auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'فصل '
        verbose_name_plural = 'فصل ها'
        ordering = ["-created_at"]

