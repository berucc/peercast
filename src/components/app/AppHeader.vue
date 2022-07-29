<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
	<header>
		<span class="name">peercast</span>
		<span class="greeting" data-label="greeting"
			>Hi, {{ userStore.username }}! 👋</span
		>
	</header>
</template>

<style scoped>
header {
	background: white;
	padding: 1rem;
	margin-bottom: 2rem;
}
header .name {
	font-weight: bold;
	font-size: 2rem;
	margin-right: 2rem;
}
</style>
