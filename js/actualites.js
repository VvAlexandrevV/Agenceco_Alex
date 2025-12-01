// page pour "valider" ou non le token et redirigé vers la page connexion si pas de token. sinon vers actualites.html.
console.log("actualites.js chargé");
const logout = document.querySelector('#logout')// bouton deconnexion
const blocksconteneur = document.querySelector('.blocksActus'); //recuperation des blocks actus pour mettre articles dedans


logout.addEventListener('click', function () { //au clique
  localStorage.removeItem('token');// on enleve le token et donc, redirection vers page connexion. car si pas de token pas d access a la page!
  window.location.href = 'connexion.html'; // redirection vers page connexion.html
});

function getData() { 
    blocksconteneur.innerHTML = "";// supprime le html de blockconteneur. donc le block "disparait"

    fetch('http://localhost:3000/articles', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then(data => data.json())
    .then(articles => {
        console.log(articles);

        articles.forEach(element => {

            const blocks = document.createElement('div');
            blocks.classList.add('blocks');

            const ptitle = document.createElement('h2');
            ptitle.textContent = element.title;

            const pdescr = document.createElement('h3');
            pdescr.textContent = element.description;

            const pcont = document.createElement('p');
            pcont.textContent = element.content;

            const pdate = document.createElement('p');
            pdate.textContent = element.publicationDate;

            const zoneBoutons = document.createElement('div');
            zoneBoutons.classList.add('btn_actualites');

            const divModif = document.createElement('div');
            divModif.classList.add('btn_modifier');

            const btnModif = document.createElement('button');
            btnModif.textContent = 'Modifier';

            btnModif.onclick = function () {
                window.location.href = 'modifier_actualite.html?id=' + element.id;
            };

            divModif.appendChild(btnModif);

            // bouton supprimer
            const divSuppr = document.createElement('div');
            divSuppr.classList.add('btn_supprimer');

            const btnSuppr = document.createElement('button');
            btnSuppr.textContent = 'Supprimer';

            btnSuppr.addEventListener('click', function() {
                if (!confirm("Supprimer définitivement cet article ?")) return;
                
                fetch('http://localhost:3000/articles/' + element.id, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then(data => {
                    getData();// recharge la page apres suppression
                });
            });

            divSuppr.appendChild(btnSuppr);

            // on assemble les deux blocs de boutons
            zoneBoutons.appendChild(divModif);
            zoneBoutons.appendChild(divSuppr);

            //AJOUT DANS LE BLOCK VERT texte correspondant dans chaque block
            blocks.appendChild(ptitle);
            blocks.appendChild(pdescr);
            blocks.appendChild(pcont);
            blocks.appendChild(pdate);
            blocks.appendChild(zoneBoutons);

            // === AJOUT DANS LE CONTENEUR GLOBAL ===
            blocksconteneur.appendChild(blocks);
        });
    }); 
}

getData(); //actualise et recharge toute la page
