

import { fetchGitHubUser } from './api.js';
import { displayUser, displayError } from './ui.js';

// Gestion de la soumission du formulaire
document.getElementById('github-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const username = document.getElementById('username').value.trim();

    if (username === '') {
        displayError('Veuillez entrer un nom d’utilisateur.');
        return;
    }

    try {
        const userData = await fetchGitHubUser(username);
        displayUser(userData);
    } catch (error) {
        displayError(error.message);
    }
});
