from rest_framework import serializers

from core.models import Node


class NodeReadSerializer(serializers.ModelSerializer):
    """
    Read serializer for the Node model.

    Represents nodes with all descendants (recursively).
    """
    children = serializers.SerializerMethodField()

    class Meta:
        model = Node
        fields = ['id', 'url', 'title', 'description', 'type', 'children']

    def get_children(self, obj):
        if obj.children:
            return NodeReadSerializer(obj.children, many=True).data


class NodeWriteSerializer(serializers.ModelSerializer):
    """
    Write serializer for the Node model.
    """
    class Meta:
        model = Node
        fields = ['id', 'url', 'title', 'description', 'type', 'children']
