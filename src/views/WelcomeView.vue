<script lang="ts" setup>
import AppHeader from '@/components/app/AppHeader.vue'
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'
import AppSection from '@/components/app/AppSection.vue'

const users = ref([])

onBeforeMount(async () => {
	const response = await axios.get('/api/users')
	users.value = response.data
})
</script>

<template>
	<AppHeader />
	<AppSection class="user-list" headline="Your Peers">
		<ul data-label="user-list">
			<li data-label="user" :key="user" v-for="user in users">{{ user }}</li>
		</ul>
	</AppSection>
</template>

<style scoped>
.user-list ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
