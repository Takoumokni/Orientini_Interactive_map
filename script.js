// //  document.addEventListener("DOMContentLoaded", function() {
// //       const hotspots = document.querySelectorAll('.hotspot');
// //       const cards = document.querySelectorAll('.card');
// //       const closeButtons = document.querySelectorAll('.close-btn');

// //       // Initialize - hide all cards on load
// //       cards.forEach(card => {
// //         card.classList.remove('show');
// //       });

// //       // Add click events to hotspots
// //       hotspots.forEach(hotspot => {
// //         hotspot.addEventListener('click', function(e) {
// //           e.stopPropagation();
// //           const targetId = this.getAttribute('data-target');
          
// //           // Hide all cards first
// //           cards.forEach(card => {
// //             card.classList.remove('show');
// //           });
          
// //           // Show the selected card
// //           const targetCard = document.getElementById(targetId);
// //           if (targetCard) {
// //             targetCard.classList.add('show');
// //           }
// //         });
// //       });

// //       // Add click events to close buttons
// //       closeButtons.forEach(button => {
// //         button.addEventListener('click', function(e) {
// //           e.stopPropagation();
// //           this.closest('.card').classList.remove('show');
// //         });
// //       });

// //       // Close card when clicking anywhere outside
// //       document.addEventListener('click', function() {
// //         cards.forEach(card => {
// //           card.classList.remove('show');
// //         });
// //       });

// //       // Prevent card from closing when clicking inside it
// //       cards.forEach(card => {
// //         card.addEventListener('click', function(e) {
// //           e.stopPropagation();
// //         });
// //       });
// //     });
// document.addEventListener("DOMContentLoaded", function() {
//       const hotspots = document.querySelectorAll('.hotspot');
//       const cards = document.querySelectorAll('.card');
//       const closeButtons = document.querySelectorAll('.close-btn');

//       // Initialize - hide all cards on load
//       cards.forEach(card => {
//         card.classList.remove('show');
//       });

//       // Add click events to hotspots
//       hotspots.forEach(hotspot => {
//         hotspot.addEventListener('click', function(e) {
//           e.stopPropagation();
//           const targetId = this.getAttribute('data-target');
          
//           // Hide all cards first
//           cards.forEach(card => {
//             card.classList.remove('show');
//           });
          
//           // Show the selected card
//           const targetCard = document.getElementById(targetId);
//           if (targetCard) {
//             targetCard.classList.add('show');
//           }
//         });
//       });

//       // Add click events to close buttons
//       closeButtons.forEach(button => {
//         button.addEventListener('click', function(e) {
//           e.stopPropagation();
//           this.closest('.card').classList.remove('show');
//         });
//       });

//       // Close card when clicking anywhere outside
//       document.addEventListener('click', function() {
//         cards.forEach(card => {
//           card.classList.remove('show');
//         });
//       });

//       // Prevent card from closing when clicking inside it
//       cards.forEach(card => {
//         card.addEventListener('click', function(e) {
//           e.stopPropagation();
//         });
//       });
//     });
document.addEventListener("DOMContentLoaded", function () {
  const hotspots = document.querySelectorAll(".hotspot");
  const cards = document.querySelectorAll(".card");
  const closeButtons = document.querySelectorAll(".close-btn");
  const map = document.querySelector(".map");
  const cardsContainer = document.querySelector(".cards");

  // Initialisation
  cards.forEach((card) => {
    card.classList.remove("show");
  });

  // Quand on clique sur un hotspot
  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("click", function (e) {
      e.stopPropagation();

      const targetId = this.getAttribute("data-target");

      // Cacher la map et afficher la zone de cartes
      map.classList.add("hidden");
      cardsContainer.classList.add("active");

      // Masquer toutes les cartes
      cards.forEach((card) => {
        card.classList.remove("show");
      });

      // Afficher la carte correspondante
      const targetCard = document.getElementById(targetId);
      if (targetCard) {
        targetCard.classList.add("show");
      }
    });
  });

  // Quand on clique sur ✖
  closeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      this.closest(".card").classList.remove("show");
      cardsContainer.classList.remove("active");
      map.classList.remove("hidden");
    });
  });
});
