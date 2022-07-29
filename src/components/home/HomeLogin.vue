<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import AppSection from '@/components/app/AppSection.vue'

const username = ref('')
const router = useRouter()
const userStore = useUserStore()

const showInfoText = ref(false)

function login() {
	if (username.value) {
		userStore.setName(username.value)
		router.push({ name: 'welcome' })
	} else {
		showInfoText.value = true
	}
}
</script>

<template>
	<AppSection class="login" headline="Login here">
		<input
			name="username"
			v-model="username"
			placeholder="username"
			data-label="username"
		/>
		<button @click="login" data-label="login-button">login</button>
		<p v-if="showInfoText" data-label="info-text">
			<em>Please enter a username.</em>
		</p>
	</AppSection>
</template>

<style scoped>
.login button {
	margin-left: 1rem;
}
</style>
