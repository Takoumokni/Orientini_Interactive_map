document.addEventListener("DOMContentLoaded", function () {
  const hotspots = document.querySelectorAll(".hotspot");
  const cards = document.querySelectorAll(".card");
  const closeButtons = document.querySelectorAll(".close-btn");
  const map = document.querySelector(".map");

  // Initialiser les cartes
  cards.forEach(card => card.classList.remove("show", "fullscreen"));

  // Lorsqu'on clique sur un hotspot
  hotspots.forEach(hotspot => {
    hotspot.addEventListener("click", function (e) {
      e.stopPropagation();

      const targetId = this.getAttribute("data-target");

      // Masquer toutes les cartes
      cards.forEach(card => card.classList.remove("show", "fullscreen"));

      // Masquer la map
      map.style.display = "none";

      // Afficher la carte correspondante en plein écran
      const targetCard = document.getElementById(targetId);
      if (targetCard) {
        targetCard.classList.add("show", "fullscreen");
      }
    });
  });

  // Lorsqu'on clique sur le bouton de fermeture
  closeButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();

      const card = this.closest(".card");
      card.classList.remove("show", "fullscreen");

      // Réafficher la map
      map.style.display = "block";
    });
  });
});
