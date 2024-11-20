
/**
 *  Requête à l'API GitHub.
 * @param {string} username - Name user.
 * @returns {Promise<object>} - Give user.
 * @throws {Error} - User erreur.
 */
export async function fetchGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Utilisateur non trouvé');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}
