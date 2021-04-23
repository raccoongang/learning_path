from rest_framework import serializers

from core.models import Node


class NodeSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()

    class Meta:
        model = Node
        fields = ['id', 'url', 'title', 'description', 'type', 'children']

    def get_children(self, obj):
        if obj.children:
            return NodeSerializer(obj.children, many=True).data
