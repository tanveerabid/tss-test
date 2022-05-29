from django.shortcuts import render
from .models import *
from django.core.paginator import Paginator

# Create your views here.

# Download document view start
def download(request):
	cat = request.GET.get('category')
	if cat:
		documents = document.objects.filter(document_category__name=cat)
		paginator = Paginator(documents, 20)
		page_obj = paginator.get_page(page_number)
		tbl_title=cat
	else:
		documents = document.objects.all()
		paginator = Paginator(documents, 20) # Show 20 contacts per page.
		page_number = request.GET.get('page')
		page_obj = paginator.get_page(page_number)
		tbl_title='all download'

	categories = document_category.objects.all()
	if categories:
		context = {
        'categories': categories,
        'page_obj': page_obj,
        'title': 'Download',
        'tbl_title':tbl_title
        }
	else:
		context = {
        'categories': categories,
        'title': 'Download',
        'tbl_title':tbl_title
        }

	return render(request, 'download/download.html', context)
# Download Document view end
