<script lang="ts">
  import { Route, router } from "tinro";

  import Home from "./routes/Home.svelte";
  import User from "./routes/User.svelte";

  router.mode.memory();
</script>

<nav>
  <a href="/">home</a>
  <a href="/user">user</a>
</nav>

<main>
  <Route path="/"><Home /></Route>
  <Route path="/user"><User /></Route>
</main>
