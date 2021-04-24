from django.db import models
from django.utils.translation import gettext_lazy as _


class Node(models.Model):
    """
    Node model.

    Each node could be one of the type:
        - pathway
        - course
        - video
        - article
        - generic (any other type)

    Could contain a many-to-many references on other nodes.
    """
    class NodeTypes(models.TextChoices):
        PATHWAY = 'pathway', _('Pathway')
        COURSE = 'course', _('Course')
        VIDEO = 'video', _('Video')
        ARTICLE = 'article', _('Article')
        GENERIC = 'generic', _('Generic')

    url = models.URLField(verbose_name="Sourse url")
    title = models.CharField(max_length=50, verbose_name="Node title")
    description = models.CharField(max_length=50)
    type = models.CharField(
        max_length=7, choices=NodeTypes.choices, default=NodeTypes.GENERIC, verbose_name="Sourse type"
    )
    children = models.ManyToManyField('self', null=True, blank=True, symmetrical=False)

    # TODO: prevent saving child linked to any ancestor to prevent cyclic serializing when retrieving through API

    def __str__(self):
        return f"{self.__class__.__name__}-{self.pk}: {self.title}"
