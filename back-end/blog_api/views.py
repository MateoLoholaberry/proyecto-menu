from django.shortcuts import render
from .models import Blog, Category
from .serializers import BlogSerializer, CategorySerializer
from rest_framework import viewsets, mixins
from rest_framework.response import Response

# Create your views here.


class BlogApiView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'


class CategoryApiView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryPostApiView(viewsets.ViewSet):

    def retrieve(self, request, pk=None):
        queryset = Blog.objects.filter(category=pk)
        serializer = BlogSerializer(queryset, many=True)

        return Response(serializer.data)


class PopularPostApiView(viewsets.ViewSet):

    def list(self, request):
        queryset = Blog.objects.filter(
            post_label__iexact='Popular').order_by('-id')[:4]
        serializer = BlogSerializer(queryset, many=True)

        return Response(serializer.data)


class LastPostsApiView(viewsets.ViewSet):

    def list(self, request):
        queryset = Blog.objects.all().order_by('-id')[:8]
        serializer = BlogSerializer(queryset, many=True)

        return Response(serializer.data)
