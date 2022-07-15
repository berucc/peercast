<script setup lang="ts">
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
	<main>
		<h2>Welcome to peercast.</h2>
		<h3>Login here</h3>
		<input name="username" v-model="username" data-label="username" />
		<button @click="login" data-label="login-button">login</button>
		<p v-if="showInfoText" data-label="info-text">Please enter a username.</p>
	</main>
</template>
