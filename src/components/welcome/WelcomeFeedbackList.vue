<script lang="ts" setup>
import { Feedback } from '#/feedback'
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
	<AppSection class="feedback-list" headline="Your Feedback">
		<ul data-label="feedback-list">
			<li data-label="feedback" :key="f.author" v-for="f in feedback">
				{{ f.author }}
				<router-link :to="`/feedback?email=${f.author}`"
					>give feedback</router-link
				>
			</li>
			<li data-label="feedback">two</li>
		</ul>
	</AppSection>
</template>
