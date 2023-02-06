import * as api from '../../lib/api.js'
/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies }) {
    const jwt = cookies.get('jwt');
    //Si pas cookie retour sur login
    const response = await api.get("locations",jwt);
    //Si reponse.ok bien --> return, sinon redirige sur login
    return {locations:response.result};
};