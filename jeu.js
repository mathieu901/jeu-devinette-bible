const questions = [
    {
        question: "Quel est le plus grand océan du monde ?",
        options: ["Atlantique", "Pacifique", "Indien", "Arctique"],
        reponse: "Pacifique"
    },
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Madrid", "Berlin", "Londres", "Paris"],
        reponse: "Paris"
    },
    {
        question: "Combien font 5 × 6 ?",
        options: ["30", "25", "20", "35"],
        reponse: "30"
    }
];

let indexQuestion = 0;

function afficherQuestion() {
    let q = questions[indexQuestion];
    document.getElementById("question").innerText = q.question;
    let reponsesDiv = document.getElementById("reponses");
    reponsesDiv.innerHTML = "";

    q.options.forEach(option => {
        let bouton = document.createElement("button");
        bouton.innerText = option;
        bouton.onclick = () => verifierReponse(option);
        reponsesDiv.appendChild(bouton);
    });

    document.getElementById("resultat").innerText = "";
}

function verifierReponse(reponse) {
    if (reponse === questions[indexQuestion].reponse) {
        document.getElementById("resultat").innerText = "Bonne réponse ! ✅";
    } else {
        document.getElementById("resultat").innerText = "Mauvaise réponse ❌";
    }
}

function suivant() {
    indexQuestion++;
    if (indexQuestion < questions.length) {
        afficherQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = "<h2>Quiz terminé ! 🎉</h2>";
    }
}

function quitterJeu() {
    window.location.href = "index.html"; // Retour à la page de connexion
}

// Démarrer le jeu au chargement de la page
window.onload = afficherQuestion;
