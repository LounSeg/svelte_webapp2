<script>
    export let data;
    console.log(data);
</script>
<h1>Locations</h1>
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