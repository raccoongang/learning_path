import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    uuid = models.CharField(default=str(uuid.uuid4()), blank=True, max_length=64)
