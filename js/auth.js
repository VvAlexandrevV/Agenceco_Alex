//cette page permet de FACTORISER le code. (en gros evite de repeter ce code dans toute les pages. cette page agit sur toutes les pages qui l auront appelé)
const token = localStorage.getItem('token') // recuperation du token dans le local storage

if(!token) {  //le ! , est une negation! Ici, "si PAS de token redirection vers connexion.html"
  window.location.href = 'connexion.html';// resultat attendu. si j vais dans l url actualites.html sans passer par la connexion , je suis redirigé vers connexion.html
}