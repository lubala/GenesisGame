function MaFonction() {

  let score = 0;

  // QUESTION 1 : année Minecraft
  let annee = document.getElementsByName("annee");

  for (let i = 0; i < annee.length; i++) {

    if (annee[i].checked) {

      if (annee[i].value == "1") {
        score++;
        annee[i].parentElement.style.color = "lime";
      } else {
        annee[i].parentElement.style.color = "red";
      }

    }

  }


  // QUESTION 2 : ventes Minecraft
  let ventes = document.getElementById("choix");

  if (ventes.value == "1") {
    score++;
    ventes.style.backgroundColor = "lime";
  } else {
    ventes.style.backgroundColor = "red";
  }


  // QUESTION 3 : yeux Herobrine
  let yeux = document.getElementById("Id_Reponse");

  if (yeux.value.toLowerCase() == "blanc" || yeux.value.toLowerCase() == "blancs") {
    score++;
    yeux.style.backgroundColor = "lime";
  } else {
    yeux.style.backgroundColor = "red";
  }


  // QUESTION 4 : créateur Deltarune
  let createur = document.getElementsByName("Ian");

  for (let i = 0; i < createur.length; i++) {

    if (createur[i].checked) {

      if (createur[i].value == "Toby Fox") {
        score++;
        createur[i].parentElement.style.color = "lime";
      } else {
        createur[i].parentElement.style.color = "red";
      }

    }

  }


  // QUESTION 5 : sortie Deltarune
  let date = document.getElementById("choix2");

  if (date.value == "I2") {
    score++;
    date.style.backgroundColor = "lime";
  } else {
    date.style.backgroundColor = "red";
  }


  // QUESTION 6 : personnage principal
  let perso = document.getElementById("Id_Reponse2");

  if (perso.value.toLowerCase() == "kris") {
    score++;
    perso.style.backgroundColor = "lime";
  } else {
    perso.style.backgroundColor = "red";
  }

  alert("Votre score est : " + score + " / 6");

}
