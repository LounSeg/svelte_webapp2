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
    <!--<input type="checkbox" id="chk" aria-hidden="true">

    <div class="signup">
        <form method="post">
            <label for="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="User name" required="">
            <input type="text" name="username" placeholder="Username" required="">
            <input type="password" name="password" placeholder="Password" required="">
            <button>Sign up</button>
        </form>
    </div>-->

    <div class="login">
        <form method="POST">
            <label for="chk" aria-hidden="true">Login</label>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>

</div>