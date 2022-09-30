<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import AppSection from '@/components/app/AppSection.vue'
import axios from 'axios'
import type { Feedback } from '#/feedback'

const feedback = ref<Feedback | null>(null)

// TODO: identify a feedback by feedback id
// TODO: request single feedback by id and display feedback text

const props = defineProps({ feedbackId: String })

onBeforeMount(async () => {
	const feedbackResponse = await axios.get<Feedback>(
		`/api/feedback/${props.feedbackId}`
	)
	feedback.value = feedbackResponse.data
})
</script>

<template>
	<AppSection
		:headline="`Your Feedback from ${feedback?.author}`"
		data-label="feedback-read-view"
	>
		<p data-label="feedback-text">{{ feedback?.text }}</p>
	</AppSection>
</template>

<style scoped>
form button {
	margin-top: 1rem;
}
</style>
