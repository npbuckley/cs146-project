wishlist = [1,2,3];

anchors = document.querySelectorAll('[id=nav]');

anchors.forEach(function(a){
    a.addEventListener('click', function(event) {
        // Stop the link from redirecting
        event.preventDefault();

        // Redirect instead with JavaScript
        window.location.href = a.href + '?' + wishlist;
    }, false);
});


console.log(anchors);



/*
$('a').each(function() {
    var href = $(this).attr('href');
    if (href) {
        if
        $(this).attr('href', url.href);
    }
});

*/