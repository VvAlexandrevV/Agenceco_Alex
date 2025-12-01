console.log('ajouterActus chargé')
const form = document.getElementById('ajouter_actu')
const titleName = document.getElementById('champ_titre_actu')
const description = document.getElementById('champ_description')
const contenu = document.getElementById('champ_contenu')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if(titleName.value.length < 4) { //4 lettres minimum
        error.textContent = 'Titre invalide';
        return ; //return remplace "else" et permet de SORTIR de la fonction. return utilisable uniquement dans une fonction!
    }

    fetch('http://localhost:3000/articles', { //pour evoyer ou recuperer données on fait "fetch"
        method: 'POST', //method POST pour dire a l API qu on envois des données et GET pour en recevoir
        headers: {
            'Authorization': 'Bearer ' + token,// ici c est pour dire a l API qu on est bien connecté.(mais l' API utilisé ici n est pas securisé donc pas besoin de cette ligne de code.)
            'Content-Type': 'application/json' // faut expliquer a l API qu on lui envois du json
        },
        body: JSON.stringify({
            title: titleName.value,
            description: description.value,
            content: contenu.value    
        })
    })
    .then(data => data.json())
    .then(articles => {
        window.location.href = 'actualites.html?id=' + articles.id; // ?id=' + articles.id; permet de mettre un ID sur chaque block vert  
    })
});


