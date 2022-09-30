<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import AppSection from '@/components/app/AppSection.vue'
import { useUserStore } from '@/stores/user'

const feedbackText = ref('')
const feedbackSent = ref(false)
const recipientEMail = useRoute().query?.recipient.toString()
const userStore = useUserStore()

async function sendFeedback() {
	await axios.post('/api/feedback', {
		author: userStore.username,
		recipient: recipientEMail,
		text: feedbackText.value,
	})
	feedbackSent.value = true
}
</script>

<template>
	<AppSection
		:headline="`Give Feedback to ${recipientEMail}`"
		data-label="feedback-give-view"
	>
		<form
			v-if="!feedbackSent"
			data-label="feedback-form"
			@submit.prevent="sendFeedback"
		>
			<textarea data-label="feedback-input" v-model="feedbackText"></textarea>
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
