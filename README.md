jQuery.readmore
===============

Simple jQuery plugin to add a read more link that expands content when it's clicked.

You give it a height and a label.

    $('#demo2 .read-more').readmore({ 'clipHeight': '190px', 'label': 'Expand' });

If the height of the content of the selected element is greater than the height passed in, it sets the selected element's css overflow property to hidden and sets the height of the selected element to the height passed in.