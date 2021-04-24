from rest_framework import serializers

from core.models import Node


class NodeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Node
        fields = ['id', 'url', 'title', 'description', 'type', 'children']
