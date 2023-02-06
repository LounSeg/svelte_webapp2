import * as api from '../../lib/api.js'
export async function load({ locals }) {
    //console.log(locals)
    if (locals.user) return locals.user;
};
export const actions = {
    default: async ({ cookies, request, locals }) => {
        const data = await request.formData();
        //console.log(data.get('username'))

        const body2 = await api.post('users/register', {
                username: data.get('username2'),
                password: data.get('password2')
        });

        const body1 = await api.post('users/login', {
            username: data.get('username2'),
            password: data.get('password2')
        });

        //console.log(body);

        if (body1.result) {
            const value = body2.result.jwt;
            cookies.set('jwt', value, { path: '/' });
            locals.user = await api.get('users/me', value)
        }

        //goto('/locations');
        //throw redirect(307, '/locations');
        return body1;
    }
};

//cookies.remove({name: "jwt"});