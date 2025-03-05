// Récupérer le code de parrainage dans l'URL
const urlParams = new URLSearchParams(window.location.search);
const refCode = urlParams.get('ref');

if (refCode) {
    // Sauvegarder le parrain dans le localStorage
    localStorage.setItem('parrain', refCode);
}

// Générer un lien de parrainage unique
function genererLien() {
    let userCode = localStorage.getItem('monCode');
    if (!userCode) {
        userCode = 'user' + Math.floor(Math.random() * 10000); // Générer un code unique
        localStorage.setItem('monCode', userCode);
    }
    document.getElementById('lien-parrainage').innerText = window.location.origin + "?ref=" + userCode;
}

// Copier le lien dans le presse-papiers
function copierLien() {
    const lien = document.getElementById('lien-parrainage').innerText;
    navigator.clipboard.writeText(lien).then(() => {
        alert("Lien copié !");
    }).catch(err => {
        console.error("Erreur de copie :", err);
    });
}

// Ajouter un filleul si l'utilisateur a été parrainé
let filleuls = JSON.parse(localStorage.getItem('filleuls')) || [];
if (refCode && !filleuls.includes(refCode)) {
    filleuls.push(refCode);
    localStorage.setItem('filleuls', JSON.stringify(filleuls));
}

// Afficher le nombre de filleuls
document.getElementById('compteur-filleuls').innerText = "Filleuls : " + filleuls.length;

// Afficher le lien au chargement
window.onload = genererLien;
