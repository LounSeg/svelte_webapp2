<script>
    //let username = "";
    //let password = "";
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";

    export let form;
    $: if (browser && (form?.ok)) {
        goto('/locations');
    }
</script>

<div class="main">
    <div class="login">
        <form method="POST">
            <label for="chk" aria-hidden="true">Login</label>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</div>
<a href="/register">Créer un compte</a>