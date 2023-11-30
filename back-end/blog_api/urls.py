from django.urls import path, include
from .views import BlogApiView, CategoryApiView, CategoryPostApiView, PopularPostApiView, LastPostsApiView
from rest_framework import routers

router = routers.SimpleRouter()

router.register('blogs', BlogApiView, basename='blogs')
router.register('category', CategoryApiView, basename='category')
router.register('categoryBasedBlogs', CategoryPostApiView,
                basename='categoryBasedBlogs')
router.register('PopularPost', PopularPostApiView, basename='PopularPost')
router.register('lastPosts', LastPostsApiView, basename='lastPosts')


urlpatterns = [
    path('', include(router.urls)),
]
