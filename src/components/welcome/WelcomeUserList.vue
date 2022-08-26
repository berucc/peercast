<script lang="ts" setup>
import { User } from '#/user'
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import AppSection from '@/components/app/AppSection.vue'

const users = ref<User[]>([])

onBeforeMount(async () => {
	const response = await axios.get<User[]>('/api/users')
	users.value = response.data
})
</script>

<template>
	<AppSection headline="Your Peers">
		<ul class="reset-list" data-label="user-list">
			<li data-label="user" :key="user.email" v-for="user in users">
				{{ user.email }}
				<router-link :to="`/feedback/give?recipient=${user.email}`"
					>give feedback</router-link
				>
			</li>
		</ul>
	</AppSection>
</template>
