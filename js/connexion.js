console.log("connexion.js chargé");

const connexion = document.querySelector('#form_log');
const email = document.querySelector ('#champ_email_log')
const mdp = document.querySelector ('#mot_de_pass')

connexion.addEventListener('submit', function(event) {
    event.preventDefault();

    fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // faut expliquer a l API qu on lui envois du json
            },
            body: JSON.stringify({
                email: email.value,// value corrspond aux donnée texte entrée dans le champ email et value
                password: mdp.value,
            })
    }) 
    .then(data => data.json())
    .then(data => {
        console.log(data);
   

    //code pour stocker token et redirection vers la page souhaitée
    if (data.token) {
        //Stocker le token
        localStorage.setItem('token', data.token); //le token cest le "code" generé, unique lié à l utilisateur pour la session en cour

        //Redirection APRÈS validation
        window.location.href = "actualites.html";
    } else {
        alert('Email ou mot de passe incorrect');
    }
})
.catch(err=> { //catch sert a "attraper" les eventuelles erreurs et empeche le crash du script et de personnaliser un message d erreur
    console.error(err);
    alert(" Erreur de connexion serveur");
     });
});

    