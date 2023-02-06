import { fail, redirect } from '@sveltejs/kit';
import * as api from '../../lib/api.js'
export async function load({ locals }) {
    //console.log(locals)
    if (locals.user) return locals.user;
};
export const actions = {
    default: async ({ cookies, request, locals }) => {
        const data = await request.formData();
        //console.log(data.get('username'))

        const body = await api.post('users/login', {
                username: data.get('username'),
                password: data.get('password')
        });

        //console.log(body);

        if (body.result) {
            const value = body.result.jwt;
            cookies.set('jwt', value, { path: '/' });
            locals.user = await api.get('users/me', value)
        }

        //goto('/locations');
        //throw redirect(307, '/locations');
        return body;
    }
};