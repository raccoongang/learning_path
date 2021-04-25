from django.urls import path, include
from rest_framework import routers

from core.views import NodeViewSet, clone_api_view


router = routers.DefaultRouter()
router.register(r'nodes', NodeViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/nodes/clone', clone_api_view),
    path('api-auth/', include('rest_framework.urls'))
]
