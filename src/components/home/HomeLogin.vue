<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

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
	<section class="login">
		<h2>Login here</h2>
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
	</section>
</template>

<style scoped>
.login {
	max-width: 500px;
	background: white;
	padding: 1rem;
	margin: 4rem auto;
}
.login h2 {
	margin-bottom: 1rem;
}
.login button {
	margin-left: 1rem;
}
</style>
