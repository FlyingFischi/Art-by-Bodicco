document.addEventListener("DOMContentLoaded", function () {
    const cartLink = document.getElementById('cart-link');
    cartLink.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Warenkorb wurde geklickt!');
    });

    function updateCart(productName) {
        alert(productName + ' wurde zum Warenkorb hinzugefügt!');
        const cartItemCount = document.getElementById('cart-item-count');
        const currentCount = parseInt(cartItemCount.innerText);
        cartItemCount.innerText = currentCount + 1;
    }

    // Hier wird der Scroll-Effekt initialisiert
    const imageSection = document.querySelector('.image-section');
    window.addEventListener('scroll', function () {
        const offset = window.scrollY;
        imageSection.style.backgroundPositionY = -offset * 0.5 + 'px';
    });
});

