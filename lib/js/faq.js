$(document).ready(function(){
  $(".faq-section h2").click(function(){
      var $content = $(this).nextUntil("h2");
      var $placeholder = $(this).siblings('.placeholder');

      if ($(this).hasClass("active")) {
          // Wenn aktiv, schließe sie und setze Platzhalter zurück
          $(this).removeClass("active");
          $content.hide();
          $placeholder.css('height', 0);
          $(".faq-line").show(); // Alle Linien sichtbar machen
      } else {
          // Wenn nicht aktiv, schließe alle anderen geöffneten Bereiche und öffne die aktuelle Überschrift
          $(".faq-section h2.active").removeClass("active");
          $(".faq-section h2.bottom").removeClass("bottom");
          $(".faq-section h2").not(this).nextUntil("h2").hide();
          $(".faq-section .placeholder").css('height', 0);
          $(".faq-line").show(); // Alle Linien sichtbar machen

          $(this).addClass("active");
          $content.show();
          $placeholder.css('height', $content.outerHeight());
      }
  });
})













