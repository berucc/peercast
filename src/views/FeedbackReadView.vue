<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import AppSection from '@/components/app/AppSection.vue'

const feedback = ref('')
const feedbackSent = ref(false)
const email = useRoute().query?.email

// TODO: identify a feedback by feedback id
// TODO: request single feedback by id and display feedback text

defineProps({ feedbackId: String })
</script>

<template>
	<AppSection
		:headline="`Your Feedback from eins@arbi.de`"
		data-label="feedback-read-view"
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
