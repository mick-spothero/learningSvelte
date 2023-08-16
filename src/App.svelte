<script>
	import Counter from './lib/Counter.svelte';
	// let name = 'Svelte';
	// let src = 'http://picsum.com/200/200';
	// let string = 'Some <strong>string</strong> with html';
	let initialCount = 3;
</script>

<Counter {initialCount} />

<!-- <img {src} alt="Some Text {name}" />
<h1>Hello {name.toUpperCase()}!</h1>
<p>{@html string}</p> -->

<style>
</style>
