
console.log(window.location.href);

wishlist = []
if(window.location.href.indexOf('?') >= 0)
    wishlist = window.location.href.substring(window.location.href.indexOf('?')+1).split(',');
    wishlist = wishlist.filter(item => item);


console.log(wishlist);

document.querySelectorAll('[id=nav]').forEach(function(a){
    a.addEventListener('click', function(event) {
        // Stop the link from redirecting
        event.preventDefault();

        // Redirect instead with JavaScript
        window.location.href = a.href + '?' + wishlist;
    }, false);
});


function AddToWishlist(id){
    wishlist.push(id);
    wishlist = wishlist.sort();
}