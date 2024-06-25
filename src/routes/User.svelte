<script lang="ts">
	import bridge, { type UserInfo } from "@vkontakte/vk-bridge";
	import { onMount } from "svelte";

	let user: UserInfo;
	onMount(async () => {
		user = await bridge.send("VKWebAppGetUserInfo");
	});
</script>

{#if user}
	<code>
		<pre>
        {JSON.stringify(user, null, 2)}
      </pre>
	</code>
{/if}
