document.addEventListener("DOMContentLoaded", function () {
    const cartLink = document.getElementById('cart-link');
    cartLink.addEventListener('click', function (event) {
        // Hier könntest du zusätzliche Logik hinzufügen, z.B., das Öffnen eines Modals
        event.preventDefault(); // Verhindert die Standardaktion des Links
        alert('Warenkorb wurde geklickt!');
    });
});

function updateCart(productName) {
    alert(productName + ' wurde zum Warenkorb hinzugefügt!');

    // Hier kannst du die Anzahl der Artikel im Warenkorb aktualisieren
    const cartItemCount = document.getElementById('cart-item-count');
    const currentCount = parseInt(cartItemCount.innerText);
    cartItemCount.innerText = currentCount + 1;
}