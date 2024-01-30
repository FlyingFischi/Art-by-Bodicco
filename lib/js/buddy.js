console.log('Setting up cart');  // Debug-Ausgabe

const cartLink = document.getElementById('cart-link');
if (cartLink) {
    cartLink.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Warenkorb wurde geklickt!');
    });
}

function updateCart(productName) {
    alert(productName + ' wurde zum Warenkorb hinzugefügt!');
    const cartItemCount = document.getElementById('cart-item-count');
    const currentCount = parseInt(cartItemCount.innerText);
    cartItemCount.innerText = currentCount + 1;
}

$(document).ready(function() {
    console.log('Document ready');  // Debug-Ausgabe

    // Hier den neuen Code einfügen
    var currentPagePath = window.location.pathname;
    console.log('Actual path:', currentPagePath);

    var imageNameMatch = "/images_bodi/bild1.jpeg".match(/\/images_bodi\/bild(\d+)\.jpeg/);
    if (!imageNameMatch) {
        console.error('Image name not found in path. Actual path:', currentPagePath);
        return;
    }

    // Extrahiere den Bildnamen
    var imageName = imageNameMatch[1];
    console.log('Image name:', imageName);

    $(".arrow").on("click", function() {
        var currentPageIndex = parseInt(imageName);
        var direction = $(this).data("direction");
        var newPageIndex = direction === "next" ? currentPageIndex + 1 : currentPageIndex - 1;

        if (newPageIndex >= 1 && newPageIndex <= 11) {
            var newPageUrl = "bild" + newPageIndex + ".html";
            window.location.href = newPageUrl;
        }
    });
});

