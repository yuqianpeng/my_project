# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('snippets', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='snippet',
            name='highlighted',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='snippet',
            name='owner',
            field=models.ForeignKey(related_name='snippets', default=123, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
