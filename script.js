document.addEventListener('DOMContentLoaded', (event) => {
    let compteur = 0; // Variable pour le compteur
    let multiplicateur = 1; // Variable pour la fonction multiplicateur 
    const boutonCookie = document.getElementById('cookie'); // Récupere l'id sur mon HTML du Cookie clickable
    const boutonAmelioration = document.getElementById('doubler'); // Recupere l'id du bouton doubleur (pour l'acheter)
    const affichageCompteur = document.getElementById('score'); // Recupere l'id du score (pour afficher mon compteur)
    let priceDouble = document.getElementById('priceDouble'); // Recupere l'id pour actualisé le prix du doubleur
    let autoClick = document.getElementById('autoclick'); // Récupère l'id de l'auto click (pour l'acheter)
    let costAuto = 500; // Ici on lui définit son prix a l'auto click
    let boutonMulti = 100; // Ici on définit le prix du doubleur
    let autoClickerActive = false; // Ici on définit le statut de l'auto click (il n'a pas été acheté)
    let autoClickInterval = 500;  // Le delay en ms de l'auto click

    boutonCookie.addEventListener('click', () => {
        compteur += multiplicateur; // Au click du cookie, le compteur s'additionne
        affichageCompteur.textContent = compteur; // Actualise le score du compteur
    });

    boutonAmelioration.addEventListener('click', () => {
        if (compteur >= boutonMulti) { // On vérifie si la valeur du compteur est = ou + au prix du boutonMulti
            compteur -= boutonMulti; // Si oui, alors on déduit le prix du boutonMulti sur le compteur
            boutonMulti *= 3; // On lui applique un *3
            multiplicateur *= 2; // On fait un *2 sur le compteur après chaque clique (pour rajouter de la difficulté :))
            affichageCompteur.textContent = compteur; // On actualise le prix sur JS
            priceDouble.textContent = "Cost : " + boutonMulti + " | Double your cookie production !"; // On actualise le prix sur l'HTML
        } else {
            alert("Vous n'avez pas assez de points pour acheter cette amélioration !"); // Si jamais l'utilisateur tente de voler ! 
        }
    });

    autoClick.addEventListener('click', () => { // Au clique sur le bouton
        if (compteur >= costAuto && !autoClickerActive) { // On vérifie si il a assez de score !
            compteur -= costAuto; // Pareil, on déduit :)
            autoClickerActive = true; // On met le statue de l'auto click en true
            startAutoClicker(); // Démarre l'autoclick
            autoClick.disabled = true; // Désactive le bouton après l'achat
            autoClick.textContent = "Auto-click purchased"; // Met à jour le texte du bouton
        } else if (autoClickerActive) {
            alert("L'auto-click a déjà été acheté !"); // Si jamais l'utilisateur tente de glitch ! 
        } else {
            alert("Vous n'avez pas assez de points pour acheter cette amélioration !");  // Si jamais l'utilisateur tente de voler ! 
        }
    });

    function startAutoClicker() { // Ici est la function de l'auto click
        if (autoClickerActive) { // Si il est true
            setInterval(() => { // On lui met le delai :)
                compteur += 1; // Ajoute 1 point au compteur
                affichageCompteur.textContent = compteur; // Met à jour l'affichage du score
            }, autoClickInterval);
        }
    }
});
