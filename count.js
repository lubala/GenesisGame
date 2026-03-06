function MaFonction() {

  let score = 0;

  // Question année
  let annee = document.getElementsByName("annee");
  for (let i = 0; i < annee.length; i++) {
    if (annee[i].checked) {
      score += parseInt(annee[i].value);

      if (annee[i].value == "1") { // valeur de la bonne réponse
        annee[i].parentElement.style.color = "green";
      } else {
        annee[i].parentElement.style.color = "red";
      }
    }
  }

  // Question ventes
  let ventes = document.getElementById("choix");

  if (ventes.value == "bonneValeur") {
    score += parseInt(ventes.value);
    ventes.style.backgroundColor = "lightgreen";
  } else {
    ventes.style.backgroundColor = "salmon";
  }

  // Question yeux
  let yeux = document.getElementById("Id_Reponse");

  if (yeux.value.toLowerCase() == "blanc" || yeux.value.toLowerCase() == "blancs") {
    score += 1;
    yeux.style.backgroundColor = "lightgreen";
  } else {
    yeux.style.backgroundColor = "salmon";
  }

  // Question créateur
  let createur = document.getElementsByName("Ian");
  for (let i = 0; i < createur.length; i++) {
    if (createur[i].checked) {
      if (createur[i].value == "Toby Fox") {
        score += 1;
        createur[i].parentElement.style.color = "green";
      } else {
        createur[i].parentElement.style.color = "red";
      }
    }
  }

  // Question date
  let date = document.getElementsByName("lang")[1];
  if (date.value == "I2") {
    score += 1;
    date.style.backgroundColor = "lightgreen";
  } else {
    date.style.backgroundColor = "salmon";
  }

  // Question personnage
  let perso = document.getElementById("Id_Reponse2");

  if (perso.value.toLowerCase() == "kris") {
    score += 1;
    perso.style.backgroundColor = "lightgreen";
  } else {
    perso.style.backgroundColor = "salmon";
  }

  alert("Votre score est : " + score + " / 6");
}
