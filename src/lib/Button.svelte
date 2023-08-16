<!-- <script>
	import Button from './lib/Button.svelte';
	import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte';
	import FaAllergies from 'svelte-icons/fa/FaAllergies.svelte';
</script>

<Button
	on:click|once={() => {
		alert(true);
	}}
	size="small"
	shadow
	bgColor="red"
	textColor="white"
	disabled
>
	<div style:width="20px" slot="leftContent" let:isIconHovered={showOtherIcon}>
		{#if showOtherIcon}
			<FaAngellist />
		{:else}
			<FaAllergies />
		{/if}
	</div>

	Something
</Button>

<style>
</style> -->

<script>
	export let size = 'small';
	export let shadow = false;
	export let bgColor = 'inherit';
	export let textColor = undefined;

	let isLeftHovered = false;
</script>

<button
	style:--buttonBgColor={bgColor}
	style:color={textColor}
	class:size-lg={size === 'large'}
	class:size-sm={size === 'small'}
	class:shadow
	on:click
	{...$$restProps}
>
	{#if $$slots.leftContent}
		<div
			role="complementary"
			class="left-content"
			on:mouseenter={() => (isLeftHovered = true)}
			on:mouseleave={() => (isLeftHovered = false)}
		>
			<slot name="leftContent" isIconHovered={isLeftHovered} />
		</div>
	{/if}
	<slot>Fallback</slot></button
>

<style lang="scss">
	@use 'src/styles/vars.scss';
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--buttonBgColor);
		cursor: pointer;
		border: none;
		color: #fff;

		font-weight: bold;
		border-radius: 5px;

		.left-content {
			margin-right: 10px;
		}

		&:disabled {
			opacity: 0.8;
			cursor: not-allowed;
		}
		&:hover {
			background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
		}
		&:active {
			background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
		}
		&.size-sm {
			padding: 15px 20px;
		}
		&.size-lg {
			padding: 20px 25px;
			font-size: 20px;
		}
		&.shadow {
			box-shadow: 0 0 10px rgba(1, 1, 1, 0.3);
		}
	}
</style>
