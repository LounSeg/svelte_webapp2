import * as api from '../../lib/api.js'
import {redirect} from "@sveltejs/kit";
/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, cookies }) {
    const jwt = cookies.get('jwt');
    const data = await api.get("locations",jwt);
    //console.log(data);
    return data;
};