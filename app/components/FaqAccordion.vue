<script setup lang="ts">
defineProps<{
  items: { q: string; a: string }[]
}>()

const openIndex = ref(0)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <div class="faq-list">
    <div v-for="(item, i) in items" :key="item.q" class="faq-item" :class="{ open: openIndex === i }">
      <button class="faq-question" @click="toggle(i)">
        <span>{{ item.q }}</span>
        <span class="faq-icon">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
        </span>
      </button>
      <div class="faq-body">
        <p class="faq-answer">{{ item.a }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.faq-item.open {
  border-color: rgba(111, 212, 122, 0.4);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: transparent;
  border: 0;
  color: var(--text);
  text-align: left;
  padding: 22px 24px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
}

.faq-question:hover {
  color: var(--green-pale);
}

.faq-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(111, 212, 122, 0.16);
  color: var(--green-pale);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.faq-item.open .faq-icon {
  transform: rotate(180deg);
}

.faq-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.faq-item.open .faq-body {
  grid-template-rows: 1fr;
}

.faq-body > .faq-answer {
  overflow: hidden;
  margin: 0 24px 0;
  min-height: 0;
}

.faq-item.open .faq-body > .faq-answer {
  margin: 0 24px 22px;
}

.faq-answer {
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.65;
  max-width: 52ch;
}
</style>
