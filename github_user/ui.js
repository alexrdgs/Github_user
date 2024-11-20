// ui.js

/**
 * informations utilisateur dans l'interface.
 * @param {object} data - Données utilisateur de l'API GitHub.
 */
export function displayUser(data) {
    const resultDiv = document.getElementById('result');
    const avatarImg = document.getElementById('avatar');
    const userName = document.getElementById('user-name');
    const publicRepos = document.getElementById('public-repos');
    const creationDate = document.getElementById('creation-date');
    const profileButton = document.getElementById('profile-button');

    resultDiv.style.display = 'block';
    document.getElementById('error').textContent = ''; // Efface les erreurs précédentes

    avatarImg.src = data.avatar_url;
    userName.textContent = `${data.login}`;
    publicRepos.textContent = `Nombre de repos : ${data.public_repos}`;
    const createdAt = new Date(data.created_at).toLocaleDateString();
    creationDate.textContent = `Utilisateur créé le : ${createdAt}, il y a  ${calculateDaysSince(data.created_at)} jours `;
    profileButton.style.display = 'inline-block';
    profileButton.onclick = () => {
        window.open(data.html_url, '_blank');
    };
   
}
 
/**
 * Affiche un message d'erreur dans l'interface.
 * @param {string} message - Message d'erreur.
 */
export function displayError(message) {
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');

    errorDiv.textContent = message;
    resultDiv.style.display = 'none';
}

/**
 * Calcule la différence jours à aujourd'hui.
 * @param {string} date - Date de création.
 * @returns {number} - Nb de jours depuis la création.
 */
export function calculateDaysSince(date) {
    const currentDate = new Date();
    const creationDate = new Date(date);
    const diffTime = Math.abs(currentDate - creationDate);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
