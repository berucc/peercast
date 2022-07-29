<script lang="ts" setup>
defineProps({
	headline: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<section class="app-section">
		<h2>{{ headline }}</h2>
		<slot />
	</section>
</template>

<style scoped>
.app-section {
	max-width: 500px;
	background: white;
	padding: 1rem;
	margin: 4rem auto;
}
.app-section h2 {
	margin-bottom: 1rem;
}
</style>
