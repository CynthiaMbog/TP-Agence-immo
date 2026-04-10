/**
 * main.js – MAHOL MA NKONG
 * Plateforme culturelle et économique du peuple Basa'a
 * Fonctionnalités : navigation, animations, filtrage, formulaire
 */

'use strict';

/* ============================================================
   DONNÉES JSON – PERSONNALITÉS BASA'A
   Structure facile à mettre à jour et à enrichir
============================================================ */
const personnalites = [

  /* ── Figures historiques ─────────────────────────────────── */
  {
    id: 1,
    categorie:    'historique',
    nom:          'Ruben Um Nyobè',
    metier:       'Syndicaliste, résistant & père du nationalisme camerounais',
    localisation: 'Cameroun',
    region:       'Sanaga Maritime',
    domaine:      'politique',
    description:  'Secrétaire général de l\'UPC, Ruben Um Nyobè est la figure emblématique de la lutte pour l\'indépendance du Cameroun. Fils du peuple Basa\'a, il mourut au combat en 1958, symbole éternel de la résistance africaine.',
    photo:        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ruben_Um_Nyob%C3%A9.jpg/330px-Ruben_Um_Nyob%C3%A9.jpg',
    contact:      null
  },
  {
    id: 2,
    categorie:    'historique',
    nom:          'Martin Paul Samba',
    metier:       'Chef militaire & résistant',
    localisation: 'Cameroun',
    region:       'Sanaga Maritime',
    domaine:      'politique',
    description:  'Officier formé par l\'armée coloniale, Martin Paul Samba choisit la résistance et paya de sa vie son refus de la domination étrangère en 1914. Il reste un héros national au Cameroun.',
    photo:        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Martin_Paul_Samba.jpg/330px-Martin_Paul_Samba.jpg',
    contact:      null
  },
  {
    id: 3,
    categorie:    'historique',
    nom:          'Ngog Lituba',
    metier:       'Site sacré fondateur',
    localisation: 'Cameroun',
    region:       'Nyong et Kellé',
    domaine:      'culture',
    description:  'Lieu mythique et spirituel du peuple Basa\'a, le rocher de Ngog Lituba est considéré comme le berceau de la civilisation Basa\'a. Classé patrimoine, il demeure le centre de pèlerinage de la communauté.',
    photo:        '',
    contact:      null
  },
  {
    id: 4,
    categorie:    'historique',
    nom:          'Docteur Louis Paul Aujoulat',
    metier:       'Militant et figure politique (contexte colonial)',
    localisation: 'Cameroun',
    region:       'Wouri',
    domaine:      'politique',
    description:  'Personnalité complexe de l\'ère coloniale, dont le rapport avec les peuples du Cameroun illustre les tensions et les luttes politiques de la première moitié du XXe siècle.',
    photo:        '',
    contact:      null
  },

  /* ── Figures contemporaines ──────────────────────────────── */
  {
    id: 5,
    categorie:    'contemporain',
    nom:          'Dr. Marthe Bilong',
    metier:       'Médecin & chercheuse en santé publique',
    localisation: 'France',
    region:       'Île-de-France',
    domaine:      'education',
    description:  'Diplômée de l\'Université Paris-Saclay, la Dre Bilong mène des recherches sur les maladies tropicales et œuvre pour l\'accès aux soins dans les régions rurales du Cameroun. Présidente d\'une ONG franco-camerounaise.',
    photo:        '',
    contact:      'mailto:contact@maholmankong.org'
  },
  {
    id: 6,
    categorie:    'contemporain',
    nom:          'Jean-Pierre Nlend',
    metier:       'Entrepreneur & investisseur en Afrique',
    localisation: 'Cameroun',
    region:       'Wouri (Douala)',
    domaine:      'business',
    description:  'Fondateur d\'un groupe immobilier actif dans plusieurs pays d\'Afrique centrale, Jean-Pierre Nlend porte l\'ambition d\'un entrepreneuriat africain souverain, ancré dans les valeurs communautaires Basa\'a.',
    photo:        '',
    contact:      'mailto:contact@maholmankong.org'
  },
  {
    id: 7,
    categorie:    'contemporain',
    nom:          'Stéphanie Biyong',
    metier:       'Ingénieure logicielle & fondatrice de startup',
    localisation: 'USA',
    region:       'Silicon Valley',
    domaine:      'tech',
    description:  'Après un parcours chez Google et Amazon, Stéphanie Biyong a fondé TechAfrika, une plateforme de formation au numérique dédiée aux jeunes francophones d\'Afrique. Elle figure parmi les 100 femmes tech les plus influentes d\'Afrique.',
    photo:        '',
    contact:      'mailto:contact@maholmankong.org'
  },
  {
    id: 8,
    categorie:    'contemporain',
    nom:          'Prof. Pierre Bassahak',
    metier:       'Historien & linguiste',
    localisation: 'France',
    region:       'Bordeaux',
    domaine:      'education',
    description:  'Professeur à l\'Université de Bordeaux, Pierre Bassahak consacre ses recherches à la langue et à l\'histoire orale du peuple Basa\'a. Il a publié plusieurs ouvrages de référence sur la civilisation Ngog Lituba.',
    photo:        '',
    contact:      'mailto:contact@maholmankong.org'
  },
  {
    id: 9,
    categorie:    'contemporain',
    nom:          'Carine Mboa',
    metier:       'Artiste plasticienne & militante culturelle',
    localisation: 'Europe',
    region:       'Bruxelles',
    domaine:      'culture',
    description:  'Ses œuvres mêlent techniques traditionnelles Basa\'a et art contemporain. Exposée dans de nombreuses galeries européennes, Carine Mboa est une voix majeure de la diaspora artistique camerounaise.',
    photo:        '',
    contact:      'mailto:contact@maholmankong.org'
  },
  {
    id: 10,
    categorie:    'contemporain',
    nom:          'Emmanuel Ngando',
    metier:       'Avocat international & défenseur des droits',
    localisation: 'France',
    region:       'Paris',
    domaine:      'politique',
    description:  'Avocat au barreau de Paris, Emmanuel Ngando défend les droits des communautés africaines en Europe et accompagne les institutions camerounaises dans les réformes juridiques. Coordinateur du Conseil Basa\'a de France.',
    photo:        '',
    contact:      'mailto:contact@maholmankong.org'
  },
  {
    id: 11,
    categorie:    'contemporain',
    nom:          'Rodrigue Mpondo',
    metier:       'Entrepreneur agritech',
    localisation: 'Cameroun',
    region:       'Sanaga Maritime',
    domaine:      'tech',
    description:  'Fondateur de Bassa\'Agro, une startup qui digitalise la filière agricole en zone rurale en Sanaga Maritime. Son application connecte 2 000 agriculteurs à des acheteurs locaux et internationaux.',
    photo:        '',
    contact:      'mailto:contact@maholmankong.org'
  },
  {
    id: 12,
    categorie:    'contemporain',
    nom:          'Nadège Bilong Ondo',
    metier:       'Directrice d\'école & pédagogue',
    localisation: 'Cameroun',
    region:       'Nyong et Kellé',
    domaine:      'education',
    description:  'Fondatrice de l\'école bilingue « Ngog Lituba » à Eseka, Nadège Bilong Ondo intègre l\'enseignement de la langue et de la culture Basa\'a dans un cursus reconnu par l\'Éducation Nationale camerounaise.',
    photo:        '',
    contact:      'mailto:contact@maholmankong.org'
  }
];


/* ============================================================
   ÉTAT DES FILTRES ACTIFS
============================================================ */
let etat = {
  categorie:    'historique',   /* 'historique' | 'contemporain' */
  localisation: 'tous',
  domaine:      'tous'
};


/* ============================================================
   UTILITAIRE – Générer une initiale stylisée si pas de photo
============================================================ */
function rendrePhoto(profil) {
  if (profil.photo) {
    return `<img
      class="profil-img"
      src="${profil.photo}"
      alt="Portrait de ${profil.nom}"
      loading="lazy"
      onerror="this.parentElement.innerHTML = rendreInitiale('${profil.nom}', '${profil.categorie}')"
    />`;
  }
  return rendreInitialeHTML(profil.nom, profil.categorie);
}

function rendreInitialeHTML(nom, categorie) {
  const initiale = nom.charAt(0).toUpperCase();
  const couleur  = categorie === 'historique' ? '#A07050' : '#1E4D3A';
  return `<div style="
    width:100%; height:100%; min-height:240px;
    background:linear-gradient(135deg, ${couleur}22, ${couleur}44);
    display:flex; align-items:center; justify-content:center;
    font-family:'Playfair Display',serif; font-size:4rem; color:${couleur};
    font-weight:300; letter-spacing:-0.02em;
  ">${initiale}</div>`;
}


/* ============================================================
   RENDU DES CARTES DE PROFIL
============================================================ */
function rendreCarteProfil(profil) {
  const badgeClasse = profil.categorie === 'historique' ? 'badge-historique' : 'badge-contemporain';
  const badgeTexte  = profil.categorie === 'historique' ? 'Historique' : 'Contemporain';

  const btnContact = profil.contact
    ? `<a href="${profil.contact}" class="btn-profil-contact">Contacter →</a>`
    : '';

  const localisationComplete = profil.region
    ? `${profil.region}, ${profil.localisation}`
    : profil.localisation;

  return `
    <article
      class="carte-profil reveler"
      data-categorie="${profil.categorie}"
      data-localisation="${profil.localisation}"
      data-domaine="${profil.domaine}"
      aria-label="Profil de ${profil.nom}"
    >
      <div class="profil-img-conteneur">
        <span class="badge-categorie ${badgeClasse}">${badgeTexte}</span>
        ${rendrePhoto(profil)}
      </div>
      <div class="profil-corps">
        <h3 class="profil-nom">${profil.nom}</h3>
        <p class="profil-metier">${profil.metier}</p>
        <p class="profil-localisation">📍 ${localisationComplete}</p>
        <span class="profil-tag-domaine">${profil.domaine}</span>
        <p class="profil-description">${profil.description}</p>
        ${btnContact}
      </div>
    </article>
  `;
}


/* ============================================================
   FILTRAGE ET AFFICHAGE DES PROFILS
============================================================ */
function afficherProfils() {
  const grille       = document.getElementById('grille-profils');
  const aucunMsg     = document.getElementById('aucun-resultat');

  if (!grille) return;

  /* Filtrage selon l'état actuel */
  const filtres = personnalites.filter(p => {
    const okCategorie    = p.categorie === etat.categorie;
    const okLocalisation = etat.localisation === 'tous' || p.localisation === etat.localisation;
    const okDomaine      = etat.domaine === 'tous'      || p.domaine      === etat.domaine;
    return okCategorie && okLocalisation && okDomaine;
  });

  /* Affichage ou message vide */
  if (filtres.length === 0) {
    grille.innerHTML   = '';
    aucunMsg.style.display = 'block';
  } else {
    aucunMsg.style.display = 'none';
    grille.innerHTML = filtres.map(rendreCarteProfil).join('');

    /* Déclencher les animations sur les nouvelles cartes */
    requestAnimationFrame(() => {
      grille.querySelectorAll('.reveler').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 80);
      });
    });
  }
}


/* ============================================================
   INITIALISATION DES ONGLETS (Historique / Contemporain)
============================================================ */
function initOnglets() {
  const onglets = document.querySelectorAll('.onglet');
  onglets.forEach(btn => {
    btn.addEventListener('click', () => {
      /* Mettre à jour UI */
      onglets.forEach(o => {
        o.classList.remove('actif');
        o.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('actif');
      btn.setAttribute('aria-selected', 'true');

      /* Réinitialiser les filtres de catégorie */
      etat.categorie = btn.dataset.categorie;
      etat.localisation = 'tous';
      etat.domaine = 'tous';

      /* Réinitialiser les boutons filtres */
      document.querySelectorAll('.filtre-btn').forEach(f => f.classList.remove('actif'));
      document.querySelectorAll('.filtre-btn[data-valeur="tous"]').forEach(f => f.classList.add('actif'));

      afficherProfils();
    });
  });
}


/* ============================================================
   INITIALISATION DES FILTRES
============================================================ */
function initFiltres() {
  const boutonsFiltres = document.querySelectorAll('.filtre-btn');

  boutonsFiltres.forEach(btn => {
    btn.addEventListener('click', () => {
      const typeFiltre = btn.dataset.filtre;
      const valeur     = btn.dataset.valeur;

      /* Mettre à jour les boutons actifs pour ce groupe */
      document.querySelectorAll(`.filtre-btn[data-filtre="${typeFiltre}"]`).forEach(b => {
        b.classList.remove('actif');
      });
      btn.classList.add('actif');

      /* Mettre à jour l'état */
      etat[typeFiltre] = valeur;
      afficherProfils();
    });
  });
}


/* ============================================================
   NAVIGATION – Défilement et burger mobile
============================================================ */
function initNavigation() {
  const navbar     = document.getElementById('navbar');
  const burger     = document.querySelector('.nav-burger');
  const menuMobile = document.getElementById('menu-mobile');
  const fermer     = document.querySelector('.menu-fermer');
  const liensMenu  = document.querySelectorAll('.menu-lien');

  /* Classe "défilé" à l'ajout lors du scroll */
  const mettreAJourNav = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('defilé');
    } else {
      navbar.classList.remove('defilé');
    }
  };
  window.addEventListener('scroll', mettreAJourNav, { passive: true });
  mettreAJourNav();

  /* Ouvrir le menu mobile */
  const ouvrirMenu = () => {
    menuMobile.classList.add('ouvert');
    menuMobile.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  /* Fermer le menu mobile */
  const fermerMenu = () => {
    menuMobile.classList.remove('ouvert');
    menuMobile.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  burger?.addEventListener('click', ouvrirMenu);
  fermer?.addEventListener('click', fermerMenu);

  /* Fermer en cliquant sur un lien */
  liensMenu.forEach(lien => lien.addEventListener('click', fermerMenu));

  /* Fermer avec la touche Échap */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fermerMenu();
  });
}


/* ============================================================
   ANIMATION AU SCROLL – Intersection Observer
============================================================ */
function initAnimationsScroll() {
  const observateur = new IntersectionObserver(
    (entrees) => {
      entrees.forEach(entree => {
        if (entree.isIntersecting) {
          entree.target.classList.add('visible');
          observateur.unobserve(entree.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  /* Observer tous les éléments à révéler */
  const observer = () => {
    document.querySelectorAll('.reveler').forEach(el => {
      observateur.observe(el);
    });
  };
  observer();

  /* Ré-observer après chaque rendu de profils */
  return observer;
}


/* ============================================================
   EFFET PARALLAX LÉGER SUR LE HÉROS
============================================================ */
function initParallax() {
  const heroFond = document.querySelector('.hero-fond');
  if (!heroFond) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scroll = window.scrollY;
        const vitesse = 0.35;
        heroFond.style.transform = `translateY(${scroll * vitesse}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}


/* ============================================================
   FORMULAIRE DE CONTACT – Validation et simulation d'envoi
============================================================ */
function initFormulaire() {
  const form    = document.getElementById('formulaire-contact');
  const succes  = document.getElementById('form-succes');
  const bouton  = form?.querySelector('.btn-envoyer');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    /* Validation HTML5 native */
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    /* Simulation d'envoi (à remplacer par un appel API réel) */
    if (bouton) {
      bouton.textContent = 'Envoi en cours…';
      bouton.disabled = true;
    }

    await new Promise(r => setTimeout(r, 1500));

    /* Afficher le succès */
    if (succes) {
      succes.style.display = 'block';
      succes.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    form.reset();

    if (bouton) {
      bouton.textContent = 'Envoyer le message →';
      bouton.disabled = false;
    }

    /* Masquer le message après 6 secondes */
    setTimeout(() => {
      if (succes) succes.style.display = 'none';
    }, 6000);
  });
}


/* ============================================================
   DÉFILEMENT FLUIDE POUR LES ANCRES
============================================================ */
function initDefilementFluide() {
  document.querySelectorAll('a[href^="#"]').forEach(lien => {
    lien.addEventListener('click', (e) => {
      const cible = document.querySelector(lien.getAttribute('href'));
      if (cible) {
        e.preventDefault();
        const offsetNav  = 80; /* hauteur de la navbar */
        const positionY  = cible.getBoundingClientRect().top + window.scrollY - offsetNav;
        window.scrollTo({ top: positionY, behavior: 'smooth' });
      }
    });
  });
}


/* ============================================================
   INITIALISATION GÉNÉRALE – Au chargement du DOM
============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* 1. Navigation */
  initNavigation();

  /* 2. Défilement fluide sur les ancres */
  initDefilementFluide();

  /* 3. Affichage initial des profils */
  afficherProfils();

  /* 4. Onglets et filtres */
  initOnglets();
  initFiltres();

  /* 5. Animations au scroll */
  const reObserver = initAnimationsScroll();

  /* Ré-observer après chaque changement de profils */
  const grilleObserver = new MutationObserver(() => reObserver());
  const grille = document.getElementById('grille-profils');
  if (grille) {
    grilleObserver.observe(grille, { childList: true });
  }

  /* 6. Parallax héros */
  initParallax();

  /* 7. Formulaire contact */
  initFormulaire();

  /* 8. Déclencher manuellement les animations visibles au chargement */
  setTimeout(() => {
    document.querySelectorAll('.reveler').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 200);

});
