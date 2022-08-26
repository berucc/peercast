<script lang="ts" setup>
import type { Feedback } from '#/feedback'
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import AppSection from '@/components/app/AppSection.vue'

const feedback = ref<Feedback[]>([])

onBeforeMount(async () => {
	const feedbackResponse = await axios.get<Feedback[]>('/api/feedback')
	feedback.value = feedbackResponse.data
})
</script>

<template>
	<AppSection headline="Your Feedback">
		<ul class="reset-list" data-label="feedback-list" v-if="feedback.length">
			<li data-label="feedback" :key="f.author" v-for="f in feedback">
				{{ f.author }}
				<router-link :to="`/feedback/read/${f.id}`">read feedback</router-link>
			</li>
		</ul>
		<p v-else>Sorry, you have no feedback yet.</p>
	</AppSection>
</template>
