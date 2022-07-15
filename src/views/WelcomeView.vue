<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
	<div class="welcome">
		<h1 data-label="greeting">Hi {{ userStore.username }}</h1>
	</div>
</template>
