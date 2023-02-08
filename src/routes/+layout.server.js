export const load = (async ({ locals }) => {
    return { user: locals.user };
});
// Permet d'avoir data.user dans nos autres fichiers