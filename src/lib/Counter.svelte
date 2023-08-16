<script>
	export let initialCount = 0;
	export let maxCount = undefined;
	let count = initialCount;
	let string = `You have clicked ${count} times`;

	$: string = `You have clicked ${count} times`; // svelte will add let keyword and curlies

	// $: if (count > 5) {
	// 	console.log(`The count is ${count}`);
	// }

	function increment() {
		if (count === maxCount) {
			return;
		}
		count += 1;
	}
</script>

<button on:click={increment}>Clicks {count}</button>
<h3>{string}</h3>

<style>
	button {
		padding: 15px 20px;
	}
</style>
