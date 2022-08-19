<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import AppHeader from '@/components/app/AppHeader.vue'
import AppSection from '@/components/app/AppSection.vue'

const feedback = ref('')
const feedbackSent = ref(false)
const email = useRoute().query?.email

async function sendFeedback() {
	await axios.post('/api/feedback/eins@arbi.de', { feedback: feedback.value })
	feedbackSent.value = true
}
</script>

<template>
	<AppHeader />
	<AppSection
		:headline="`Give Feedback to ${email}`"
		data-label="feedback-view"
	>
		<form
			v-if="!feedbackSent"
			data-label="feedback-form"
			@submit.prevent="sendFeedback"
		>
			<textarea data-label="feedback-input" v-model="feedback"></textarea>
			<button data-label="submit" type="submit">Give Feedback</button>
		</form>
		<p v-else data-label="success-message">
			Your feedback was successfully sent.
			<RouterLink to="/welcome" data-label="go-back"
				>Go back to participant list</RouterLink
			>
		</p>
	</AppSection>
</template>

<style scoped>
form button {
	margin-top: 1rem;
}
</style>
