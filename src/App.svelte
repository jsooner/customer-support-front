<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import Rate from "./routes/Rate.svelte"

	export let name;
	export let url = "";

</script>

<main>
	<Router {url}>
		<Route path="rate/:id" let:params>
			<Rate id = {params.id}/>
		</Route>
		<Route path="/" component="{Home}" />
	</Router>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>