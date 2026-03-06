function MaFonction() {

  let score = 0;

  let annee = document.getElementsByName("annee");
  for (let i = 0; i < annee.length; i++) {
    if (annee[i].checked) {
      score += parseInt(annee[i].value);
    }
  }

  let ventes = document.getElementById("choix");
  score += parseInt(ventes.value);

  let yeux = document.getElementById("Id_Reponse").value.toLowerCase();
  if (yeux == "blanc" || yeux == "blancs") {
    score += 1;
  }

  let createur = document.getElementsByName("Ian");
  for (let i = 0; i < createur.length; i++) {
    if (createur[i].checked && createur[i].value == "Toby Fox") {
      score += 1;
    }
  }

  let date = document.getElementsByName("lang")[1];
  if (date.value == "I2") {
    score += 1;
  }

  let perso = document.getElementById("Id_Reponse2").value.toLowerCase();
  if (perso == "kris") {
    score += 1;
  }

  alert("Votre score est : " + score + " / 6");

}
