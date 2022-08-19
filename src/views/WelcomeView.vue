<script lang="ts" setup>
import AppHeader from '@/components/app/AppHeader.vue'
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'
import AppSection from '@/components/app/AppSection.vue'
import { User } from '#/user'

const users = ref<User[]>([])

onBeforeMount(async () => {
	const response = await axios.get<User[]>('/api/users')
	users.value = response.data
})
</script>

<template>
	<AppHeader />
	<AppSection class="user-list" headline="Your Peers">
		<ul data-label="user-list">
			<li data-label="user" :key="user.email" v-for="user in users">
				{{ user.email }}
				<router-link :to="`/feedback?email=${user.email}`"
					>give feedback</router-link
				>
			</li>
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
