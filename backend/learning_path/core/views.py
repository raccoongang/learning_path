from rest_framework import permissions, viewsets
import logging
from core.serializers import NodeSerializer
from core.models import Node


class NodeViewSet(viewsets.ModelViewSet):
    queryset = Node.objects.all()
    serializer_class = NodeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if node_type:=self.request.GET.get('type'):
            return Node.objects.filter(type=node_type)
        return super().get_queryset()
