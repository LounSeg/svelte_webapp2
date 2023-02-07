<script>
    import * as api from "$lib/api.js";
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    export let form;
    $: if (browser && (form?.ok)) {
        goto('/');
    }
    export let data;
    //console.log(data);
    function deleteJwt() {
        console.log("Pas fait1")
        async ({ cookies }) => {
            cookies.set('jwt', "", { path: '/' });
        }
        console.log("Fait1")
    }

</script>
<h1>Locations</h1>
<form action="deleteCookie.php">
    <button type="submit">Log Out</button>
</form>
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
    </tr>
{/each}
</tbody>