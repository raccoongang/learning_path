import logging

from rest_framework import permissions, viewsets
from rest_framework.decorators import api_view
from rest_framework.exceptions import ParseError
from rest_framework.response import Response

from core.serializers import NodeReadSerializer, NodeWriteSerializer
from core.models import Node
from core.mixins import ReadWriteSerializerMixin


log = logging.getLogger(__name__)


class NodeViewSet(ReadWriteSerializerMixin, viewsets.ModelViewSet):
    """
    DRF retrieve / create view for Nodes.

    POST parameters:
        - url (str)
        - title (str)
        - description (str)
        - type (str, one of ['pathway', 'course', 'video', 'article', 'generic'])
        - children (int)
    """
    queryset = Node.objects.all()
    read_serializer_class = NodeReadSerializer
    write_serializer_class = NodeWriteSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        if node_type:=self.request.GET.get('type'):
            return Node.objects.filter(type=node_type)
        return super().get_queryset()


@api_view(['POST'])
def clone_api_view(request, format=None):
    if not (node_id:=request.POST.get('id')):
        raise ParseError('You should provide the node id to perform clonning.')
    try:
        target_node = Node.objects.get(id=node_id)
    except Node.DoesNotExist:
        raise ParseError('Node not found. Please, check that node id is correct.')
    else:
        log.info(f"Start cloning a node {target_node.id}.")
        new_node = Node.objects.create(
            url=target_node.url,
            title=target_node.title,
            description=target_node.description,
            type=target_node.type,
        )
        if children_ids:=target_node.children.values_list('id', flat=True):
            new_node.children.add(*[i for i in children_ids])
        log.warning(f'Node {new_node.id} was cloned from {target_node.id}.')
        data = NodeReadSerializer(new_node).data
    return Response(data)


