from django.urls import path, include
from rest_framework import routers

from core.views import NodeViewSet


router = routers.DefaultRouter()
router.register(r'nodes', NodeViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls'))
]
