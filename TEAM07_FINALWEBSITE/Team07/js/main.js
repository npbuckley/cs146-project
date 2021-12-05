$('.wishlist-menu').css('visibility', 'hidden');
wishlist = []
wishlistActive = false;


//Wishlist Info
itemNames = ['Reusable Grocery Bags (3 Pack)',
            'Solar Panel Lanterns',
            'LED Lightbulbs',
            'Repurposed Wallet',
            'Recycled Material Handbag',
            'Bioplastic Phone Cases',
            'Resuable Coffee Cup',
            'Rechargeable Flashlight',
            'Compostable Plates, Bowls, and Trays',
            'Garden Pots'];

itemPrices = ['$26.99',
            '$28.00',
            '$12.78/ four lightbulbs',
            '$25.00',
            '$70.00 - $80.00',
            '$49.95 - 54.95',
            '$19.95',
            '$63.65',
            '$8.06 - $364.86',
            '$4.89/pot'];

itemImages = ['../images/grocery-bags.jpg',
            '../images/lantern.jpg',
            '../images/lightbulbs.jpg',
            '../images/wallet.png',
            '../images/handbag.png',
            '../images/phonecase.jpg',
            '../images/coffeecup.jpg',
            '../images/flashlight.jpg',
            '../images/coffeecup.jpg',
            '../images/gardenpots.jpg'];


if(window.location.href.indexOf('?') >= 0)
    wishlist = window.location.href.substring(window.location.href.indexOf('?')+1).split(',');
    wishlist = wishlist.filter(item => item);

    var wishlist = wishlist.map(function (x) { 
      return parseInt(x, 10); 
    });


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
    wishlist = [...new Set(wishlist)];

    if(wishlistActive)
        OpenWishlist();
}

function RemoveItem(id){
    wishlist.splice(wishlist.indexOf(id), 1);

    OpenWishlist();
}

function WishlistClicked(){
    wishlistActive = !wishlistActive;

    if(wishlistActive)
        OpenWishlist();
    else
        $('.wishlist-menu').css('visibility', 'hidden');
}

function OpenWishlist(){
    $('.wishlist-menu').css('visibility', '');

    items = $('.wishlist-items');
    items.html("");

    for(var x = 0; x < wishlist.length; x++){
        box = document.createElement('div');
        box.className = 'item-box';

        n = document.createElement("h4");
        n.className = 'item-wishlist-title';
        n.textContent = itemNames[wishlist[x]];

        price = document.createElement('p');
        price.className = 'item-wishlist-price';
        price.textContent = itemPrices[wishlist[x]];

        image = document.createElement('img');
        image.className = 'item-wishlist-images';
        image.src = itemImages[wishlist[x]];

        remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'item-wishlist-button';
        remove.textContent = 'Remove';
        remove.setAttribute("onclick","RemoveItem(" + wishlist[x] +")");


        box.append(image, n, price, remove);

        items.append(box);
    }
}