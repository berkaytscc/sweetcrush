<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'SWEETCRUSH/Board',
	});
</script>

<Story name="Board">
	<div class="container">
		<div class="board"></div>
	</div>
</Story>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
	}
	.board {
		width: 720px;
		height: 460px;
		background-color: #000;
		transform: translateY(-40px);
	}
</style>

