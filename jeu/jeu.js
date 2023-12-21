// Déclaration des variables neccesaire.
let nouveau = document.querySelector("#commencer");
let motAtrouver = document.querySelector(".tiret");
let lettres = document.querySelectorAll(".lettre");
let motChoisi ="";
let vie = document.querySelector("#vie");
let commentaire = document.querySelector("#commentaire");

// Les éléments cacher.
document.getElementById("step_1").hidden = true;
document.getElementById("step_2").hidden = true;
document.getElementById("step_3").hidden = true;
document.getElementById("step_4").hidden = true;
document.getElementById("step_5").hidden = true;
document.getElementById("step_6").hidden = true;
document.getElementById("step_7").hidden = true;
document.getElementById("recommencer").hidden = true;

// Les mots aléatoires.
let tableauDeMot = [
    "grognement","douleur","baigner", "liquide", "aviateur", "lait","microscope", "collection", "discorde",
    "majeur", "garage", "initiale", "foi", "niveau", "informaticien"
];



// Génération des mot aléatoire.

function aleatoire () {
    const random = Math.floor(Math.random() * tableauDeMot.length);
    let motAleatoire = tableauDeMot[random];
    return motAleatoire;
}

// Génération des tirets équivalent au nombre de lettres.

function creerCases() {
    let tirets = document.querySelector("#tiret");

    separation.forEach((x) => {
      const generationDesTirets = document.createElement("div");
      if (x === " ") {
      } else {
        generationDesTirets.textContent = "_";
        generationDesTirets.style.margin = "5px";
        generationDesTirets.classList.add ('generationDesTirets');
      }
      tirets.appendChild(generationDesTirets);
    });
  }
  motAleatoire = aleatoire();


// Séparation du mot 
let separation = motAleatoire.split("");
 creerCases(motAleatoire);

function jouer(){

    // Récupération des lettres cliqué 
    let vieRestante = 7;
    let lettresCliquees = [];
    let lettresCorrectes = 0;
    
    lettres.forEach((lettre) =>
      lettre.addEventListener("click", (x) => {
      let lettreCliquee = x.target.textContent;      
      
      
// Vérifier si les lettres on déjà étais cliquer.
        if (!lettresCliquees.includes(lettreCliquee)) {
        lettresCliquees.push(lettreCliquee);
        let bonneReponse = false;
        lettre.style.backgroundColor = "red";

  
// Vérifier que la lettre sois correcte
       separation.forEach((lettreSeparer, index) => {
        if (lettreSeparer.toUpperCase() === lettreCliquee.toUpperCase()) {
        lesGenerationDesTirets[index].textContent = lettreSeparer;
        bonneReponse = true;
        lettre.style.backgroundColor = "green";
      bonneReponse++
          } 
        });
    

//Récupération des informations concernant les vies.
          if (!bonneReponse) {
          vieRestante--;
          vie.textContent = "Il vous reste" + " " +  vieRestante + " "  + "vies";
          } 
// Gestion des images en fonction du nombre de vie restant.
          function lesImages () {
              if(vieRestante === 6) {
                document.getElementById("step_1").hidden = false;
              }
              if(vieRestante === 5) {
                document.getElementById("step_1").hidden = true;
                document.getElementById("step_2").hidden = false;
              }
              if(vieRestante === 4) {
                document.getElementById("step_1").hidden = true;
                document.getElementById("step_2").hidden = true;
                document.getElementById("step_3").hidden = false;

              }
              if(vieRestante === 3) {
                document.getElementById("step_1").hidden = true;
                document.getElementById("step_2").hidden = true;
                document.getElementById("step_3").hidden = true;
                document.getElementById("step_4").hidden = false;

              }
              if(vieRestante === 2) {
                document.getElementById("step_1").hidden = true;
                document.getElementById("step_2").hidden = true;
                document.getElementById("step_3").hidden = true;
                document.getElementById("step_4").hidden = true;
                document.getElementById("step_5").hidden = false;
              }
              if(vieRestante === 1) {
                document.getElementById("step_1").hidden = true;
                document.getElementById("step_2").hidden = true;
                document.getElementById("step_3").hidden = true;
                document.getElementById("step_4").hidden = true;
                document.getElementById("step_5").hidden = true;
                document.getElementById("step_6").hidden = false;
              }
              if(vieRestante === 0) {
                document.getElementById("step_1").hidden = true;
                document.getElementById("step_2").hidden = true;
                document.getElementById("step_3").hidden = true;
                document.getElementById("step_4").hidden = true;
                document.getElementById("step_5").hidden = true;
                document.getElementById("step_6").hidden = true;
                document.getElementById("step_7").hidden = false;
            }
          }
lesImages();       

// Annonce des résultats
          if (lettresCorrectes === separation.length){
            document.getElementById("recommencer").hidden = false;
            commentaire.textContent = "Félication vous remporter la parti"
            document.getElementById("alphabet").hidden = true;
        }

          if(vieRestante === 0){
            vie.textContent = "Vous n'avez plus de vies";
            commentaire.textContent = "Vous avez perdu ):";
            document.getElementById("alphabet").hidden = true;
            document.getElementById("recommencer").hidden = false;
          } 
        }
      })
    )
    }  
 const lesGenerationDesTirets = document.querySelectorAll (".generationDesTirets")
jouer();


