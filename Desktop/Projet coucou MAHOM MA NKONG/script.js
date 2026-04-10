/* ============================================================
   MAHOL MA NKONG — Script principal
   Fonctionnalités : navigation, animations, filtres, formulaire
============================================================ */

'use strict';

/* ============================================================
   DONNÉES JSON — FIGURES REMARQUABLES
   (Modifiables facilement pour ajouter / retirer des profils)
============================================================ */
const FIGURES = [

  /* ---- FIGURES HISTORIQUES ---- */
  {
    id: 1,
    categorie: "historique",
    nom: "Ruben Um Nyobè",
    role: "Résistant & Père de l'indépendance",
    domaine: "politique",
    lieu: "cameroun",
    lieuAffiche: "Boumnyebel, Cameroun",
    description: "Secrétaire général de l'UPC et figure emblématique de la résistance à la colonisation française. Il incarne le combat pour l'indépendance et la dignité du peuple camerounais.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Um_Nyobe.jpg/440px-Um_Nyobe.jpg",
    contact: false
  },
  {
    id: 2,
    categorie: "historique",
    nom: "Manga Bell",
    role: "Chef traditionnel & Résistant",
    domaine: "politique",
    lieu: "cameroun",
    lieuAffiche: "Douala, Cameroun",
    description: "Chef des Basa'a côtiers à Douala, il résista courageusement aux expropriation coloniales allemandes. Exécuté en 1914, il reste un symbole de dignité et de résistance.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rudolf_Duala_Manga_Bell.jpg/440px-Rudolf_Duala_Manga_Bell.jpg",
    contact: false
  },
  {
    id: 3,
    categorie: "historique",
    nom: "Moumié Félix-Roland",
    role: "Dirigeant politique & Militant",
    domaine: "politique",
    lieu: "cameroun",
    lieuAffiche: "Cameroun",
    description: "Président de l'UPC et ardent défenseur de l'indépendance complète du Cameroun. Figure incontournable de la lutte anticoloniale africaine du XXe siècle.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Felix-Roland_Moumie.jpg/440px-Felix-Roland_Moumie.jpg",
    contact: false
  },
  {
    id: 4,
    categorie: "historique",
    nom: "Henriette Ekué",
    role: "Militante & Héroïne nationale",
    domaine: "culture",
    lieu: "cameroun",
    lieuAffiche: "Littoral, Cameroun",
    description: "Femme engagée dans la résistance Basa'a, elle a porté la cause de son peuple avec un courage extraordinaire dans les moments les plus sombres de l'histoire coloniale.",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop",
    contact: false
  },

  /* ---- FIGURES CONTEMPORAINES ---- */
  {
    id: 5,
    categorie: "contemporain",
    nom: "Dr. Amara Bassa",
    role: "Chirurgien & Philanthrope",
    domaine: "education",
    lieu: "france",
    lieuAffiche: "Paris, France",
    description: "Chirurgien cardiologue de renommée internationale, fondateur d'une ONG qui forme des médecins au Cameroun et offre des soins gratuits dans les villages Basa'a.",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
    contact: true
  },
  {
    id: 6,
    categorie: "contemporain",
    nom: "Sandra Nkong",
    role: "Fondatrice de startup & Investisseur",
    domaine: "business",
    lieu: "usa",
    lieuAffiche: "New York, USA",
    description: "Fondatrice d'une fintech africaine valorisée à 50M$, Sandra œuvre pour l'inclusion financière des communautés de diaspora et investit dans les start-ups camerounaises.",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop",
    contact: true
  },
  {
    id: 7,
    categorie: "contemporain",
    nom: "Patrick Mpoo",
    role: "Ingénieur & Entrepreneur Tech",
    domaine: "tech",
    lieu: "europe",
    lieuAffiche: "Berlin, Allemagne",
    description: "Ingénieur en intelligence artificielle chez un leader mondial de la tech. Initiateur du programme 'Code Basa'a' qui forme les jeunes au numérique dans la région littorale.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    contact: true
  },
  {
    id: 8,
    categorie: "contemporain",
    nom: "Pasteur Jean Mbene",
    role: "Leader spirituel & Bâtisseur social",
    domaine: "religion",
    lieu: "cameroun",
    lieuAffiche: "Edéa, Cameroun",
    description: "Pasteur et leader communautaire, il a fondé une école bilingue et un centre de santé dans la région de la Sanaga Maritime, servant plus de 3000 familles Basa'a.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    contact: true
  },
  {
    id: 9,
    categorie: "contemporain",
    nom: "Céline Bati-Nguena",
    role: "Architecte & Directrice culturelle",
    domaine: "culture",
    lieu: "france",
    lieuAffiche: "Lyon, France",
    description: "Architecte primée et directrice du festival culturel 'Racines Basa'a' à Lyon, elle œuvre pour la visibilité artistique du peuple Basa'a en Europe.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    contact: true
  },
  {
    id: 10,
    categorie: "contemporain",
    nom: "Martin Njock",
    role: "Député & Juriste",
    domaine: "politique",
    lieu: "cameroun",
    lieuAffiche: "Yaoundé, Cameroun",
    description: "Député à l'Assemblée Nationale et docteur en droit international, Martin défend activement les droits fonciers et les intérêts économiques de la communauté Basa'a.",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    contact: true
  },
  {
    id: 11,
    categorie: "contemporain",
    nom: "Aline Nkeng",
    role: "Chercheuse & Linguiste",
    domaine: "education",
    lieu: "europe",
    lieuAffiche: "Genève, Suisse",
    description: "Docteure en linguistique africaine à l'Université de Genève, Aline coordonne le premier dictionnaire numérique de la langue Basa'a et travaille sur sa préservation.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    contact: true
  },
  {
    id: 12,
    categorie: "contemporain",
    nom: "Eric Mpoo-Ngog",
    role: "PDG & Entrepreneur agricole",
    domaine: "business",
    lieu: "cameroun",
    lieuAffiche: "Douala, Cameroun",
    description: "Fondateur d'un groupe agro-industriel spécialisé dans la transformation du manioc et du plantain. Il emploie plus de 400 personnes dans la région de la Sanaga Maritime.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    contact: true
  }
];


/* ============================================================
   ÉTAT DE L'APPLICATION
============================================================ */
const etat = {
  categorieActive: 'historique',
  filtreDomaineActif: 'tous',
  filtreLieuActif: 'tous'
};


/* ============================================================
   INITIALISATION AU CHARGEMENT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initialiserNavigation();
  initialiserAnimationsScroll();
  initialiserOnglets();
  initialiserFiltres();
  rendreProfils();
  initialiserFormulaire();
});


/* ============================================================
   NAVIGATION
============================================================ */
function initialiserNavigation() {
  const navbar       = document.getElementById('navbar');
  const hamburger    = document.getElementById('btnHamburger');
  const menuMobile   = document.getElementById('menuMobile');
  const btnFermer    = document.getElementById('btnFermerMenu');
  const liensMenu    = menuMobile.querySelectorAll('.menu-mobile-lien');

  /* Effet navbar au défilement */
  const observerNav = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('defilée');
    } else {
      navbar.classList.remove('defilée');
    }
  };
  window.addEventListener('scroll', observerNav, { passive: true });
  observerNav();

  /* Ouverture menu mobile */
  hamburger.addEventListener('click', ouvrirMenuMobile);
  btnFermer.addEventListener('click', fermerMenuMobile);

  /* Fermer en cliquant sur un lien */
  liensMenu.forEach(lien => {
    lien.addEventListener('click', fermerMenuMobile);
  });

  /* Fermer en appuyant sur Echap */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fermerMenuMobile();
  });
}

/* Expose globalement pour le HTML inline */
function ouvrirMenuMobile() {
  const menuMobile = document.getElementById('menuMobile');
  const hamburger  = document.getElementById('btnHamburger');
  menuMobile.classList.add('ouvert');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function fermerMenuMobile() {
  const menuMobile = document.getElementById('menuMobile');
  const hamburger  = document.getElementById('btnHamburger');
  menuMobile.classList.remove('ouvert');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}


/* ============================================================
   ANIMATIONS AU DÉFILEMENT (Intersection Observer)
============================================================ */
function initialiserAnimationsScroll() {
  const elements = document.querySelectorAll('.reveler');

  if (!elements.length) return;

  const observateur = new IntersectionObserver(
    (entrees) => {
      entrees.forEach(entree => {
        if (entree.isIntersecting) {
          entree.target.classList.add('visible');
          observateur.unobserve(entree.target); /* Animation une seule fois */
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  elements.forEach(el => observateur.observe(el));
}

/* Réinitialise l'observer pour les nouveaux éléments (ex : après filtrage) */
function observerNouveauxElements() {
  const elements = document.querySelectorAll('.reveler:not(.visible)');
  if (!elements.length) return;

  const observateur = new IntersectionObserver(
    (entrees) => {
      entrees.forEach(entree => {
        if (entree.isIntersecting) {
          entree.target.classList.add('visible');
          observateur.unobserve(entree.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  elements.forEach(el => observateur.observe(el));
}


/* ============================================================
   ONGLETS (Historiques / Contemporains)
============================================================ */
function initialiserOnglets() {
  const onglets = document.querySelectorAll('.onglet');

  onglets.forEach(onglet => {
    onglet.addEventListener('click', () => {
      /* Mise à jour de l'état */
      etat.categorieActive = onglet.dataset.categorie;

      /* Mise à jour des classes actives */
      onglets.forEach(o => {
        o.classList.remove('actif');
        o.setAttribute('aria-selected', 'false');
      });
      onglet.classList.add('actif');
      onglet.setAttribute('aria-selected', 'true');

      /* Réinitialiser les filtres lors du changement d'onglet */
      etat.filtreDomaineActif = 'tous';
      etat.filtreLieuActif    = 'tous';
      reinitialiserBoutonsFiltres();

      /* Mettre à jour l'affichage */
      rendreProfils();
    });
  });
}


/* ============================================================
   FILTRES (Domaine & Localisation)
============================================================ */
function initialiserFiltres() {
  /* Filtres par domaine */
  document.querySelectorAll('[data-filtre-domaine]').forEach(btn => {
    btn.addEventListener('click', () => {
      etat.filtreDomaineActif = btn.dataset.filtreDomaine;
      mettreAJourBoutonsFiltres('[data-filtre-domaine]', btn);
      rendreProfils();
    });
  });

  /* Filtres par localisation */
  document.querySelectorAll('[data-filtre-lieu]').forEach(btn => {
    btn.addEventListener('click', () => {
      etat.filtreLieuActif = btn.dataset.filtreLieu;
      mettreAJourBoutonsFiltres('[data-filtre-lieu]', btn);
      rendreProfils();
    });
  });
}

function mettreAJourBoutonsFiltres(selecteur, btnActif) {
  document.querySelectorAll(selecteur).forEach(b => b.classList.remove('actif'));
  btnActif.classList.add('actif');
}

function reinitialiserBoutonsFiltres() {
  /* Remet "Tous" comme actif pour domaine et lieu */
  document.querySelectorAll('[data-filtre-domaine]').forEach(b => {
    b.classList.toggle('actif', b.dataset.filtreDomaine === 'tous');
  });
  document.querySelectorAll('[data-filtre-lieu]').forEach(b => {
    b.classList.toggle('actif', b.dataset.filtreLieu === 'tous');
  });
}

/* Exposé globalement pour le bouton "Réinitialiser" */
function reinitialiserFiltres() {
  etat.filtreDomaineActif = 'tous';
  etat.filtreLieuActif    = 'tous';
  reinitialiserBoutonsFiltres();
  rendreProfils();
}


/* ============================================================
   RENDU DES CARTES DE PROFIL
============================================================ */
function rendreProfils() {
  const grille        = document.getElementById('panneau-figures');
  const aucunResultat = document.getElementById('aucunResultat');

  /* Filtrage des données */
  const figuresFiltrees = FIGURES.filter(figure => {
    const correspondCategorie = figure.categorie === etat.categorieActive;
    const correspondDomaine   = etat.filtreDomaineActif === 'tous' || figure.domaine === etat.filtreDomaineActif;
    const correspondLieu      = etat.filtreLieuActif   === 'tous' || figure.lieu    === etat.filtreLieuActif;
    return correspondCategorie && correspondDomaine && correspondLieu;
  });

  /* Animation de sortie */
  grille.style.opacity = '0';
  grille.style.transform = 'translateY(8px)';
  grille.style.transition = 'opacity 0.2s, transform 0.2s';

  setTimeout(() => {
    /* Génération du HTML */
    if (figuresFiltrees.length === 0) {
      grille.innerHTML = '';
      aucunResultat.hidden = false;
    } else {
      aucunResultat.hidden = true;
      grille.innerHTML = figuresFiltrees.map(genererCarteProfil).join('');
    }

    /* Animation d'entrée */
    grille.style.opacity = '1';
    grille.style.transform = 'translateY(0)';

    /* Observer les nouvelles cartes */
    grille.querySelectorAll('.reveler').forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.06}s`;
    });
    observerNouveauxElements();

  }, 200);
}

/* Génère le HTML d'une carte de profil */
function genererCarteProfil(figure) {
  const badgeClasse = figure.categorie === 'historique' ? 'badge-historique' : 'badge-contemporain';
  const badgeTexte  = figure.categorie === 'historique' ? 'Historique' : 'Contemporain';
  const domaineTrad = traduireDomaine(figure.domaine);

  const boutonContact = figure.contact
    ? `<button class="profil-btn-contact" onclick="contacterFigure('${echapper(figure.nom)}')">
         Contacter →
       </button>`
    : '';

  return `
    <article class="profil-carte reveler" data-id="${figure.id}" aria-label="Profil de ${echapper(figure.nom)}">

      <div class="profil-image-wrap">
        <img
          class="profil-image"
          src="${echapper(figure.photo)}"
          alt="Portrait de ${echapper(figure.nom)}"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop'; this.onerror=null;"
        />
        <span class="profil-badge ${badgeClasse}">${badgeTexte}</span>
      </div>

      <div class="profil-corps">
        <span class="profil-tag-domaine">${domaineTrad}</span>
        <h3 class="profil-nom">${echapper(figure.nom)}</h3>
        <p class="profil-role">${echapper(figure.role)}</p>
        <p class="profil-lieu">${echapper(figure.lieuAffiche)}</p>
        <p class="profil-desc">${echapper(figure.description)}</p>
        ${boutonContact}
      </div>

    </article>
  `;
}

/* Traduit les clés de domaine en français */
function traduireDomaine(domaine) {
  const traductions = {
    politique:  'Politique',
    culture:    'Culture & Arts',
    business:   'Business',
    tech:       'Technologie',
    education:  'Éducation & Recherche',
    religion:   'Religion & Social'
  };
  return traductions[domaine] || domaine;
}

/* Échappe les caractères HTML pour éviter les injections XSS */
function echapper(texte) {
  if (typeof texte !== 'string') return '';
  return texte
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* Action sur le bouton "Contacter" d'un profil */
function contacterFigure(nom) {
  /* Pré-remplir le formulaire de contact avec le sujet */
  const champSujet = document.getElementById('sujet');
  if (champSujet) {
    champSujet.value = 'figure';
  }
  const champMessage = document.getElementById('message');
  if (champMessage && !champMessage.value) {
    champMessage.value = `Bonjour, je souhaite entrer en contact avec ${nom} via la plateforme MAHOL MA NKONG.`;
  }

  /* Scroller vers le formulaire */
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}


/* ============================================================
   FORMULAIRE DE CONTACT
============================================================ */
function initialiserFormulaire() {
  const formulaire   = document.getElementById('formulaireContact');
  const messageSucces = document.getElementById('formSucces');

  if (!formulaire) return;

  formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    /* Validation basique */
    if (!validerFormulaire(formulaire)) return;

    /* Simulation d'envoi (à remplacer par un vrai appel API) */
    const btnEnvoyer = formulaire.querySelector('.btn-envoyer');
    btnEnvoyer.textContent = 'Envoi en cours...';
    btnEnvoyer.disabled = true;

    setTimeout(() => {
      /* Afficher le message de succès */
      formulaire.hidden = true;
      messageSucces.hidden = false;

      /* Réinitialiser après 8 secondes */
      setTimeout(() => {
        formulaire.reset();
        formulaire.hidden = false;
        messageSucces.hidden = true;
        btnEnvoyer.textContent = 'Envoyer le message';
        btnEnvoyer.disabled = false;
        /* Remettre l'icône flèche */
        btnEnvoyer.innerHTML = 'Envoyer le message <span class="btn-fleche">→</span>';
      }, 8000);

    }, 1500);
  });

  /* Validation en temps réel */
  formulaire.querySelectorAll('input, textarea').forEach(champ => {
    champ.addEventListener('blur', () => validerChamp(champ));
    champ.addEventListener('input', () => {
      if (champ.classList.contains('invalide')) validerChamp(champ);
    });
  });
}

/* Valide l'ensemble du formulaire */
function validerFormulaire(formulaire) {
  const champRequis = formulaire.querySelectorAll('[required]');
  let valide = true;

  champRequis.forEach(champ => {
    if (!validerChamp(champ)) valide = false;
  });

  return valide;
}

/* Valide un champ individuel */
function validerChamp(champ) {
  const valeur = champ.value.trim();
  let estValide = true;

  if (champ.hasAttribute('required') && !valeur) {
    estValide = false;
  }

  if (champ.type === 'email' && valeur) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    estValide = regexEmail.test(valeur);
  }

  champ.classList.toggle('invalide', !estValide);
  champ.setAttribute('aria-invalid', !estValide);

  return estValide;
}


/* ============================================================
   EFFET PARALLAXE LÉGER SUR LE HERO
============================================================ */
(function initialiserParallaxe() {
  const hero = document.getElementById('accueil');
  if (!hero) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const defilement = window.scrollY;
        const fond = hero.querySelector('.hero-fond');
        if (fond && defilement < window.innerHeight) {
          fond.style.transform = `translateY(${defilement * 0.28}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();


/* ============================================================
   NAVIGATION : LIEN ACTIF SELON LA SECTION VISIBLE
============================================================ */
(function initialiserLienActif() {
  const sections = document.querySelectorAll('section[id]');
  const liensNav = document.querySelectorAll('.nav-lien:not(.nav-lien-cta)');

  const observateur = new IntersectionObserver(
    (entrees) => {
      entrees.forEach(entree => {
        if (entree.isIntersecting) {
          const id = entree.target.getAttribute('id');
          liensNav.forEach(lien => {
            const href = lien.getAttribute('href');
            lien.classList.toggle('actif-nav', href === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observateur.observe(s));
})();


/* ============================================================
   STYLE CSS SUPPLÉMENTAIRE : Champ invalide
   (Injecté dynamiquement pour rester dans le script)
============================================================ */
(function ajouterStylesValidation() {
  const style = document.createElement('style');
  style.textContent = `
    .form-groupe input.invalide,
    .form-groupe textarea.invalide {
      border-color: #C0392B;
      background-color: #FDF2F2;
    }
    .nav-lien.actif-nav {
      color: var(--marron);
    }
    .nav-lien.actif-nav::after {
      right: 0;
    }
  `;
  document.head.appendChild(style);
})();
