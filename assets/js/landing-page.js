// Carousel logic
const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("hidden-slide", i !== index);
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

// Load footer

fetch("/assets/html/header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header-placeholder").innerHTML = html;

    // Re-evaluate scripts inside the injected HTML
    const temp = document.createElement("div");
    temp.innerHTML = html;
    const scripts = temp.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      document.body.appendChild(newScript);
    });
  });

fetch("/assets/html/footer.html")
  .then((res) => {
    if (!res.ok) throw new Error("Footer fetch failed");
    return res.text();
  })
  .then((html) => {
    document.getElementById("footer-placeholder").innerHTML = html;
  })
  .catch((err) => console.error("Footer error:", err));

// Header background change on scroll
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > window.innerHeight) {
    header.classList.add("bg-white", "shadow-md", "text-black");
    header.classList.remove("text-white");
  } else {
    header.classList.remove("bg-white", "shadow-md", "text-black");
    header.classList.add("text-white");
  }
});

// Popup logic
function togglePopup(event) {
  event.stopPropagation();
  const popup = document.getElementById("popup");
  popup.classList.toggle("hidden");
}

document.addEventListener("click", function (e) {
  const popup = document.getElementById("popup");
  const button = document.querySelector('button[onclick="togglePopup(event)"]');

  if (!popup.contains(e.target) && e.target !== button) {
    popup.classList.add("hidden");
  }
});

tailwind.config = {
  theme: {
    extend: {
      animation: {
        "pop-in": "popIn 0.8s ease-out forwards",
        "pop-out": "popOut 0.8s ease-in forwards",
      },
      keyframes: {
        popIn: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        popOut: {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(20px) scale(0.95)" },
        },
      },
    },
  },
};

const cards = document.querySelectorAll(".project-card");
let index = 0;

function animateCard() {
  // Hide all cards
  cards.forEach((card) => {
    card.classList.remove("animate-pop-in", "animate-pop-out");
    card.style.opacity = "0";
  });

  const current = cards[index];
  current.classList.add("animate-pop-in");
  current.style.opacity = "1";

  // Fade out after 2.5s
  setTimeout(() => {
    current.classList.remove("animate-pop-in");
    current.classList.add("animate-pop-out");

    setTimeout(() => {
      current.style.opacity = "0";
      index = (index + 1) % cards.length;
      animateCard();
    }, 800); // pop-out duration
  }, 2500); // stay visible
}

animateCard();

// Include after Swiper JS is loaded
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  speed: 600,
  mousewheel: true,
});

tailwind.config = {
  theme: {
    extend: {
      colors: {
        beige: "#DCC9A3",
      },
    },
  },
};


document.addEventListener('DOMContentLoaded', () => {
  // Translations object
  const translations = {
    fr: {
      popup_info: "Devenez membre AHOME pour accéder à toutes les informations. Plus d'informations ici",
      popup_login: "Se connecter",
      popup_register: "S'inscrire",
      carousel1_title: "Monstres <br><span class=\"text-2xl font-light\">Sous-Marins</span>",
      carousel1_desc: "Le crocodile marin – le prédateur cuirassé de la nature venu des profondeurs.",
      carousel2_title: "Les <br><span class=\"text-2xl font-light\">Portes de l'Enfer</span>",
      carousel2_desc: "Spécial à l'intérieur des volcans – explorer la fureur de la nature extrême.",
      carousel3_title: "Exploration <br><span class=\"text-2xl font-light\">de Grottes Profondes</span>",
      carousel3_desc: "De véritables capsules temporelles – où le passé et le présent se rencontrent sous terre.",
      hero_title: "Immobilier de Luxe à Vienne",
      hero_desc: "Où le design intemporel rencontre l'investissement exclusif",
      projects_current_title: "Projets Actuels",
      project_luminea_title: "Villa Luminea",
      project_luminea_desc: "Piscine en acier inoxydable, vue panoramique sur Vienne à Kaasgraben.",
      project_grace_title: "GRACE",
      project_grace_desc: "33 appartements de luxe au cœur du 3ème arrondissement, Hetzgasse 8.",
      project_chipperfield_title: "Crownd by Chipperfield",
      project_chipperfield_desc: "Trois villas conçues par David Chipperfield dans le 13ème arrondissement de Vienne.",
      project_casa_title: "Casa Crownd",
      project_casa_desc: "Chef-d'œuvre minimaliste entouré de verdure et d'air frais.",
      project_severin_title: "Das Severin",
      project_severin_desc: "Finitions intérieures intemporelles et vues inégalées sur la skyline de Vienne.",
      project_chez_title: "Chez",
      project_chez_desc: "Architecture d'inspiration parisienne avec jardins sur le toit et spa.",
      project_glanzinggasse_title: "Glanzinggasse",
      project_glanzinggasse_desc: "Les plus beaux looks – constructions contemporaines aux portes de Vienne urbaine.",
      project_fortytwo_title: "4ty-Two",
      project_fortytwo_desc: "Appartements loft de luxe avec domotique intelligente et service de conciergerie.",
      projects_all_title: "Tous les Projets",
      all_project_villa_title: "Villa de Luxe",
      all_project_villa_desc: "Villa moderne de 5 chambres avec piscine au centre de Vienne",
      all_project_view: "Voir le projet →",
      all_project_loft_title: "Loft Urbain",
      all_project_loft_desc: "Loft de style industriel dans le 3ème arrondissement",
      all_project_minimalist_title: "Maison Minimaliste",
      all_project_minimalist_desc: "Des lignes épurées et des espaces ouverts dans ce joyau architectural",
      all_project_mountain_title: "Retraite en Montagne",
      all_project_mountain_desc: "Maison alpine isolée avec vue panoramique",
      all_project_cottage_title: "Chalet au Bord du Lac",
      all_project_cottage_desc: "Charmante propriété au bord de l'eau avec quai privé",
      insights_stay_loop_part1: "Restez ",
      insights_stay_loop_part2: "Informé",
      insights_desc: "Analyses, mises à jour de progrès et nouvelles exclusives de Crownd Real Estate.",
      insight1_img_span: "Voir la galerie du projet",
      insight1_tag: "Mise à jour de la construction",
      insight1_title: "Du Premier Coup de Pelle à la Remise des Clés",
      insight1_date: "2 avril 2024",
      insight1_text: "Nous documentons chaque phase de construction, des fondations à la remise des clés. Voici un aperçu de l'état actuel et des prochaines étapes.",
      insight1_learn_more: "En savoir plus",
      insight2_img_span: "Découvrez les caractéristiques uniques",
      insight2_tag: "Jalon Atteint",
      insight2_title: "Chape Terminée & Cave à Vin Historique",
      insight2_date: "15 mars 2024",
      insight2_text: "Le plancher de la chape est maintenant terminé. De plus, nous avons découvert une cave à vin historique – un véritable atout pour les futurs résidents et les passionnés.",
      insight2_view_details: "Voir les détails",
      insight3_img_span: "Voir les designs intérieurs",
      insight3_tag: "Travaux Intérieurs",
      insight3_title: "Fenêtres & Espaces Intérieurs en Vedette",
      insight3_date: "1er mars 2024",
      insight3_text: "Les fenêtres sont installées et les travaux de cloison sèche battent leur plein – une étape majeure vers le confort de vie et une planification optimale de la lumière du jour.",
      insight3_current_status: "Statut actuel",
      insights_view_all_updates: "Voir toutes les mises à jour",
      invest_opportunities_title: "Opportunités d'Investissement",
      invest_opportunities_desc: "Faites partie d'une boutique d'investissement exclusive. Crownd vous invite à co-investir dans l'immobilier haut de gamme dans les meilleurs emplacements de Vienne.",
      dreams_take_shape_title: "Où les Rêves <span class=\"text-purple-400 block sm:inline-block mt-2 sm:mt-0\">Prennent Forme.</span>",
      dreams_take_shape_desc: "Découvrez des **bâtiments** exquis, des **appartements** luxueux et des **maisons sur mesure** conçues pour votre style de vie ultime.",
      dreams_take_shape_button: "Voir notre portfolio",
      membership_exclusive_access: "Accès Exclusif",
      membership_join_title_part1: "Rejoignez l'",
      membership_join_title_part2: "Ahome",
      membership_unlock_desc: "Débloquez un monde d'opportunités dans des propriétés de premier choix. Obtenez un accès privilégié à :",
      membership_list1: "<strong>Mises à jour privées</strong> sur les listes exclusives",
      membership_list2: "<strong>Offres \"Early Bird\"</strong> sur les nouveaux développements",
      membership_list3: "<strong>Invitations VIP</strong> aux visites de propriétés",
      membership_join_society: "Rejoignez la société",
      dispatch_exclusive_insights: "Perspectives Exclusives",
      dispatch_title_part2: "Dépêche",
      dispatch_desc: "Entrez dans le monde de l'immobilier de premier ordre. Abonnez-vous pour des **tendances de marché** sélectionnées, un accès anticipé aux **nouvelles propriétés** et des **commentaires d'experts** exclusifs.",
      dispatch_email_placeholder: "Votre adresse e-mail professionnelle",
      dispatch_subscribe_now: "S'abonner maintenant",
      lang_toggle_text: "English" // Text for the toggle button
    },
    en: {
      popup_info: "Become an AHOME member for access to all information. More on this",
      popup_login: "Log in",
      popup_register: "To register",
      carousel1_title: "Underwater <br><span class=\"text-2xl font-light\">Monsters</span>",
      carousel1_desc: "Saltwater Crocodile – nature's armored predator from the deep seas.",
      carousel2_title: "The <br><span class=\"text-2xl font-light\">Gates of Hell</span>",
      carousel2_desc: "Special inside volcanoes – exploring extreme nature's fury.",
      carousel3_title: "Exploring <br><span class=\"text-2xl font-light\">Deep Caves</span>",
      carousel3_desc: "Real Time Capsules – where the past and present collide underground.",
      hero_title: "Luxury Real Estate in Vienna",
      hero_desc: "Where timeless design meets exclusive investment",
      projects_current_title: "Current Projects",
      project_luminea_title: "Villa Luminea",
      project_luminea_desc: "Stainless steel pool, panoramic view over Vienna at Kaasgraben.",
      project_grace_title: "GRACE",
      project_grace_desc: "33 luxury apartments in the heart of the 3rd district, Hetzgasse 8.",
      project_chipperfield_title: "Crownd by Chipperfield",
      project_chipperfield_desc: "Three villas designed by David Chipperfield in Vienna's 13th district.",
      project_casa_title: "Casa Crownd",
      project_casa_desc: "Minimalist masterpiece surrounded by greenery and fresh air.",
      project_severin_title: "Das Severin",
      project_severin_desc: "Timeless interior finishes and unmatched Vienna skyline views.",
      project_chez_title: "Chez",
      project_chez_desc: "Parisian-inspired architecture with rooftop gardens and spa.",
      project_glanzinggasse_title: "Glanzinggasse",
      project_glanzinggasse_desc: "Finest Looks – contemporary builds on the edge of urban Vienna.",
      project_fortytwo_title: "4ty-Two",
      project_fortytwo_desc: "Luxury loft apartments with smart automation and concierge service.",
      projects_all_title: "All Projects",
      all_project_villa_title: "Luxury Villa",
      all_project_villa_desc: "Modern 5-bedroom villa with pool in central Vienna",
      all_project_view: "View Project →",
      all_project_loft_title: "Urban Loft",
      all_project_loft_desc: "Industrial-style loft in the 3rd district",
      all_project_minimalist_title: "Minimalist House",
      all_project_minimalist_desc: "Clean lines and open spaces in this architectural gem",
      all_project_mountain_title: "Mountain Retreat",
      all_project_mountain_desc: "Secluded alpine home with panoramic views",
      all_project_cottage_title: "Lakeside Cottage",
      all_project_cottage_desc: "Charming waterfront property with private dock",
      insights_stay_loop_part1: "Stay in the ",
      insights_stay_loop_part2: "Loop",
      insights_desc: "Insights, progress updates, and exclusive news from Crownd Real Estate.",
      insight1_img_span: "View Project Gallery",
      insight1_tag: "Construction Update",
      insight1_title: "From Groundbreaking to Handover",
      insight1_date: "April 2, 2024",
      insight1_text: "We document every construction phase from foundation to key handover. Here’s a look at the current status and next steps.",
      insight1_learn_more: "Learn more",
      insight2_img_span: "Explore Unique Features",
      insight2_tag: "Milestone Achieved",
      insight2_title: "Screed Completed & Historic Wine Cellar",
      insight2_date: "March 15, 2024",
      insight2_text: "The screed floor is now finished. Additionally, we uncovered a historic wine cellar—a true highlight for future residents and enthusiasts.",
      insight2_view_details: "View details",
      insight3_img_span: "See Interior Designs",
      insight3_tag: "Interior Work",
      insight3_title: "Windows & Interior Spaces in Focus",
      insight3_date: "March 1, 2024",
      insight3_text: "Windows are installed, and drywall work is in full swing—a major step toward living comfort and optimal daylight planning.",
      insight3_current_status: "Current status",
      insights_view_all_updates: "View all updates",
      invest_opportunities_title: "Investment Opportunities",
      invest_opportunities_desc: "Become part of an exclusive investment boutique. Crownd invites you to co-invest in high-end real estate in Vienna’s prime locations.",
      dreams_take_shape_title: "Where Dreams <span class=\"text-purple-400 block sm:inline-block mt-2 sm:mt-0\">Take Shape.</span>",
      dreams_take_shape_desc: "Explore exquisite **buildings**, luxurious **apartments**, and bespoke **custom-made homes** designed for your ultimate lifestyle.",
      dreams_take_shape_button: "View Our Portfolio",
      membership_exclusive_access: "Exclusive Access",
      membership_join_title_part1: "Join the ",
      membership_join_title_part2: "Ahome",
      membership_unlock_desc: "Unlock a world of opportunities in prime properties. Gain privileged access to:",
      membership_list1: "<strong>Private Updates</strong> on exclusive listings",
      membership_list2: "<strong>Early Bird Offers</strong> on new developments",
      membership_list3: "<strong>VIP Invitations</strong> to property viewings",
      membership_join_society: "Join the Society",
      dispatch_exclusive_insights: "Exclusive Insights",
      dispatch_title_part2: "Dispatch",
      dispatch_desc: "Step inside the world of premier real estate. Subscribe for curated **market trends**, early access to **new listings**, and exclusive **expert commentary**.",
      dispatch_email_placeholder: "Your professional email address",
      dispatch_subscribe_now: "Subscribe Now",
      lang_toggle_text: "Français" // Text for the toggle button
    }
  };

  const languageToggleBtn = document.getElementById('language-toggle');
  let currentLanguage = localStorage.getItem('lang') || 'fr'; // Default to French

  function applyTranslations(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.dataset.key;
      if (translations[lang][key]) {
        // Handle special cases like placeholders
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
          element.placeholder = translations[lang][key];
        } else {
          // Use innerHTML to preserve bold/br tags
          element.innerHTML = translations[lang][key];
        }
      }
    });
    // Update the language toggle button text
    languageToggleBtn.textContent = translations[lang].lang_toggle_text;
  }

  function toggleLanguage() {
    currentLanguage = (currentLanguage === 'fr') ? 'en' : 'fr';
    localStorage.setItem('lang', currentLanguage);
    applyTranslations(currentLanguage);
  }

  // Initial application of translations on page load
  applyTranslations(currentLanguage);

  // Event listener for the language toggle button
  if (languageToggleBtn) {
    languageToggleBtn.addEventListener('click', toggleLanguage);
  }

  // --- Your existing carousel and popup JS below ---
  // (Assuming togglePopup function is also defined in this file or globally accessible)

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove('hidden-slide');
        slide.style.opacity = '1';
        slide.style.zIndex = '1';
      } else {
        slide.classList.add('hidden-slide');
        slide.style.opacity = '0';
        slide.style.zIndex = '0';
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  // Automatically advance slides every 5 seconds
  setInterval(nextSlide, 5000);

  // Initial display of the first slide
  showSlide(currentSlide);

  // Popup logic (ensure togglePopup is defined if not already)
  // This is a placeholder for your existing popup toggle function.
  // Make sure your actual togglePopup function is available in this scope.
  window.togglePopup = function(event) {
    event.preventDefault(); // Prevent default link/button action if any
    const popup = document.getElementById('popup');
    if (popup) {
      popup.classList.toggle('hidden');
      popup.classList.toggle('opacity-0');
      popup.classList.toggle('opacity-100');
    }
  };

});