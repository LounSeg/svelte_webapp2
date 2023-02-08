import * as api from '../../lib/api.js'
import {redirect} from "@sveltejs/kit";
export async function load({ locals, cookies }) {
    if (!locals.user) throw redirect(307, '/login');
    const jwt = cookies.get('jwt');
    //Si pas cookie retour sur login
    const response = await api.get("locations",jwt);
    //Si reponse.ok bien --> return, sinon redirige sur login
    return {locations:response.result};
};