<svelte:options immutable={true} />

<script>
	import TodoList from './lib/TodoList.svelte';
	import { v4 as uuid } from 'uuid';

	let todos = [
		{
			id: uuid(),
			title: 'Todo 1',
			completed: true
		},
		{
			id: uuid(),
			title: 'Todo 2',
			completed: false
		},
		{
			id: uuid(),
			title: 'Todo 3',
			completed: false
		},
		{
			id: uuid(),
			title: 'Todo 4',
			completed: false
		}
	];

	function handleAddTodo(event) {
		// event.preventDefault()
		const { detail } = event;

		if (!detail.title) {
			return;
		}

		todos = [
			...todos,
			{
				id: uuid(),
				title: detail.title,
				completed: false
			}
		];
	}

	function handleRemoveTodo(event) {
		const { detail } = event;

		if (!detail.id) {
			return;
		}

		todos = todos.filter((todo) => todo.id !== detail.id);
	}

	function handleToggleTodo(event) {
		const { detail } = event;

		todos = todos.map((todo) => {
			if (todo.id === detail.id) {
				return { ...todo, completed: detail.value };
			} else {
				return todo;
			}
		});
	}
</script>

<TodoList
	{todos}
	on:addtodo={handleAddTodo}
	on:removetodo={handleRemoveTodo}
	on:toggletodo={handleToggleTodo}
/>

<style>
</style>
