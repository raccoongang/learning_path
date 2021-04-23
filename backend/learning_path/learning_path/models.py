from django.db import models
from django.utils.translation import gettext_lazy as _


class Node(models.Model):

    class NodeTypes(models.TextChoices):
        PATHWAY = 'pathway', _('Pathway')
        COURSE = 'course', _('Course')
        VIDEO = 'video', _('Video')
        ARTICLE = 'article', _('Article')
        GENERIC = 'generic', _('Generic')

    url = models.URLField(verbose_name="Sourse url")
    title = models.CharField(max_length=50, verbose_name="Sourse url")
    description = models.CharField(max_length=50, verbose_name="Sourse url")
    type = models.CharField(
        max_length=7, choices=NodeTypes.choices, default=NodeTypes.GENERIC, verbose_name="Sourse url"
    )
    children = models.ForeignKey('self', on_delete=models.PROTECT)
