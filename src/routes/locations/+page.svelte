<script>
    //import * as api from "$lib/api.js";
    import {browser} from "$app/environment";
    import {goto} from "$app/navigation";
    export let form;
    if (browser && (form?.ok)) {
         goto('/login');
    }

    export let data;
    /*function deleteJwt() {
        console.log("Pas fait1")
        async ({ cookies }) => {
            cookies.set('jwt', "", { path: '/' });
        }
        console.log("Fait1")
    }*/
</script>
<h1>Locations</h1>
<!--<form action="deleteCookie.php">
    <button type="submit">Log Out</button>
</form>-->
Veuillez refresh la page si le bouton "New Location" n'apparait pas si dessous
<br>
{#if data.user.role === 'admin'}
    <a href="/locations/new">New Location</a>
{/if}
<br>
<br>
<thead>
<tr>
    {#each Object.keys(data.locations[0]) as columnHeading}
        <th>{columnHeading}</th>
    {/each}
</tr>
</thead>
<tbody>
{#each Object.values(data.locations) as row}
    <tr>
        {#each Object.values(row) as cell}
            <td>{cell}</td>
        {/each}
        {#if data.user.role === 'admin'}
            <td>
                <a href="/locations/{row._id}/edit">Edit</a>
            </td>
            <td>
                <form action="/locations/{row._id}/delete" method="POST">
                    <input type="submit" value="Delete"/>
                </form>
            </td>
        {/if}
    </tr>
{/each}
</tbody>