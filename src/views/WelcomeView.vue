<script lang="ts" setup>
import AppHeader from '@/components/app/AppHeader.vue'
import WelcomeUserList from '@/components/welcome/WelcomeUserList.vue'
import WelcomeFeedbackList from '@/components/welcome/WelcomeFeedbackList.vue'
</script>

<template>
	<AppHeader />
	<WelcomeUserList />
	<WelcomeFeedbackList />
</template>

<style scoped>
.feedback-list ul,
.user-list ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
