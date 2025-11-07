//MENU BURGER
const burger = document.getElementById('burger');// les constantes permettent de cibler les elements à "modifier"
const nav = document.getElementById('menu');
const closeBtn = document.querySelector('#menu .close-btn'); //getelementbyID pour selection un seul element par l  ID et queryselector peut selectionner plusieurs elements ID class etc

//BOUTONS GALERIE
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides =document.getElementById('slides');
const nombreSlide = slides.children.length; //length permet de compte le nombre d enfants (les img dans ce cas) dans le slides

//CODE MENU BURGER
burger.addEventListener('click', () => {
  //bascule la classe "open"
  nav.classList.toggle('open');

  //si la nav est ouverte = cache le burger
  if (nav.classList.contains('open')) {
    burger.style.display = 'none';
  } else {
    //si la nav est fermée = réaffiche le burger
    burger.style.display = 'flex';
  }
});

// interaction fermeture menu burger
closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');   // enlève ouvert la nav repasse à display:none (via CSS)
  burger.style.display = 'flex';  // burger revient on met flex et pas block car le burger est un "texte" span
});

//CODE BOUTONS GALERIE
let slide = 0 // par defaut on est sur la slide 0 (l image de base affichée)

prev.addEventListener('click', () => {
  console.log('click à gauche'); //consol log pour voir l evenement dans la console
  slide = slide -1;//en cliquant on slide de -1 vers la "gauche"
  if(slide < 0)
    {
      slide = nombreSlide - 1;
    } 
  changerSlide();
})

next.addEventListener('click', () => {
  console.log('click à droite');
  slide = slide +1;//on slide de +1 vers la "droite"
    if(slide >= nombreSlide)
    {
      slide = 0;
    } 
  changerSlide();
})

function changerSlide() {
  slides.style.transform = 'translateX(-' + (slide*100) + '%)';
}

function changerSlide() {
  slides.style.transform = 'translateX(-' + (slide * 100) + '%)';
}

// === SWIPE MOBILE POUR LA GALERIE ===

// variables pour suivre le doigt
let startX = 0;
let currentX = 0;
let isDragging = false;

// quand l'utilisateur pose le doigt sur la galerie
slides.addEventListener('touchstart', (e) => { // touchstart =quand le doigt touche l ecran sur mobile.Sur PC c est click
  startX = e.touches[0].clientX; // position de départ
  isDragging = true;
});

slides.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX; // position actuelle pendant le glissement
});

slides.addEventListener('touchend', () => {
  if (!isDragging) return;
  isDragging = false;

  const diff = currentX - startX; // différence entre le départ et l’arrivée
  const seuil = 50; // distance minimale pour déclencher le changement

  if (diff < -seuil) {
    // glissement vers la gauche → image suivante
    slide = slide + 1;
    if (slide >= nombreSlide) {
      slide = 0;
    }
    changerSlide();
  }

  if (diff > seuil) {
    // glissement vers la droite → image précédente
    slide = slide - 1;
    if (slide < 0) {
      slide = nombreSlide - 1;
    }
    changerSlide();
  }
});





