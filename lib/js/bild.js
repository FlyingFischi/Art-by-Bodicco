$(document).ready(function() {
    console.log("Document ready"); // Debug-Ausgabe für das Dokument fertig geladen

    $(".arrow").on("click", function() {
        console.log("Pfeil geklickt!"); // Debug-Ausgabe hinzugefügt
        console.log("Aktueller Pfad:", window.location.pathname); // Debug-Ausgabe für den Pfad
        var currentPageIndex = parseInt(window.location.pathname.match(/bild(\d+)\.html/)[1]);
        console.log("Aktuelle Seite:", currentPageIndex); // Debug-Ausgabe für die aktuelle Seite
        var direction = $(this).data("direction");
        console.log("Richtung:", direction); // Debug-Ausgabe für die Richtung
        var newPageIndex = direction === "next" ? currentPageIndex + 1 : currentPageIndex - 1;
        console.log("Neue Seite:", newPageIndex); // Debug-Ausgabe für die neue Seite

        if (newPageIndex >= 1 && newPageIndex <= 11) {
            var newPageUrl = "bild" + newPageIndex + ".html";
            console.log("Neue Seite URL:", newPageUrl); // Debug-Ausgabe für die neue Seite URL
            window.location.href = newPageUrl;
        } else {
            console.log("Ungültige Seite"); // Debug-Ausgabe für den Fall einer ungültigen Seite
        }
    });
});
