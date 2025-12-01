// 2eme FICHIER JS POUR RENDRE MENU BURGER INDEPENDANT SINON BUG!
//MENU BURGER
const burger = document.getElementById('burger');// les constantes permettent de cibler les elements à "modifier"
const nav = document.getElementById('menu');
const closeBtn = document.querySelector('#menu .close-btn'); //getelementbyID pour selection un seul element par l  ID et queryselector peut selectionner plusieurs elements ID class etc

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
