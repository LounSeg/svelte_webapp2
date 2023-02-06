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
    <div class="signup">
        <form method="POST">
            <label for="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="username2" placeholder="Username">
            <input type="password" name="password2" placeholder="Password">
            <button type="submit">Sign Up</button>
        </form>
    </div>
</div>
<a href="/login">Login</a>