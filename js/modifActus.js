console.log('modifActu chargé');


//RECUP ID DANS L'URL
const params = new URLSearchParams(window.location.search); 
// on cherche la partie params de l'url à savoir "?id=1"

const id = params.get('id');  
// ici, je récupère l'id qui est à la fin de l'URL

console.log("ID récupéré :", id);

// si pas d'id redirection vers page actualités
if (!id) {
    window.location.href = 'actualites.html';
}

//RECUPERER LES CHAMPS DU FORMULAIRE
const champTitre = document.getElementById('champ_titre_actu2');
const champDescription = document.getElementById('champ_description2');
const champContenu = document.getElementById('champ_contenu2');

const addActu = document.getElementById('ajouter_actu'); 
// formulaire de modification

    
//RECUPERER L'ARTICLE A MODIFIER (GET)
fetch('http://localhost:3000/articles/' + id, { 
    headers: {
        'Authorization': 'Bearer ' + token
    }
})
.then(data => data.json()) // conversion en JSON
.then(article => {
    console.log("Article reçu :", article);

    // remplir les champs
    champTitre.value = article.title;
    champDescription.value = article.description;
    champContenu.value = article.content;
})
.catch(err => console.log("Erreur GET :", err));


//MISE A JOUR (PUT)
addActu.addEventListener("submit", function(event) {
    event.preventDefault(); // on bloque l’envoi normal du formulaire

    const dataMaj = { // récupération valeurs input
        title: champTitre.value,
        description: champDescription.value,
        content: champContenu.value
    };

    console.log("Données envoyées :", dataMaj);

    fetch('http://localhost:3000/articles/' + id, { 
        method: "PUT", // je mets à jour l'élément existant donc : PUT !
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json" // correction du header
        },
        body: JSON.stringify(dataMaj) // conversion JS → JSON pour l'API
    })
    .then(res => res.json())
    .then(data => {
        console.log("Article mis à jour :", data);

        // redirection vers actualités après mise à jour
        window.location.href = "actualites.html";
    })
    .catch(err => console.log("Erreur PUT :", err));
});
// Bouton supprimer de la page modifActu
const btnDelete = document.getElementById("btn-delete"); // bouton dans le HTML

btnDelete.addEventListener("click", function () {
    if (!confirm("Supprimer définitivement cet article ?")) return;

    fetch('http://localhost:3000/articles/' + id, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token
        }
    })
    .then(() => {
        window.location.href = "actualites.html"; // retour à la liste
    })
    .catch(err => console.log("Erreur DELETE :", err));
});
