import vkBridge from "@vkontakte/vk-bridge";
import "./app.css";
import App from "./App.svelte";

vkBridge.send("VKWebAppInit");

const app = new App({
	target: document.getElementById("root")!,
});

export default app;
