<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import AppSection from '@/components/app/AppSection.vue'
import axios from 'axios'
import { Feedback } from '#/feedback'

const feedback = ref(null)

// TODO: identify a feedback by feedback id
// TODO: request single feedback by id and display feedback text

const props = defineProps({ feedbackId: String })

onBeforeMount(async () => {
	const feedbackResponse = await axios.get<Feedback>(
		`/api/feedback/${props.feedbackId}`
	)
})
</script>

<template>
	<AppSection
		:headline="`Your Feedback from eins@arbi.de`"
		data-label="feedback-read-view"
	>
		<p data-label="feedback-text">Your feedback was successfully sent.</p>
	</AppSection>
</template>

<style scoped>
form button {
	margin-top: 1rem;
}
</style>
