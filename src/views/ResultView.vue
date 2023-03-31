<script setup lang="ts">
import { ref, type Ref, watch } from 'vue';
import { HistoryService } from '@/services/HistoryService';
import type { DrawHistoryPayload } from '@/services/types/DrawHistoryPayload';

const results: Ref<DrawHistoryPayload> = ref({draws: []});
const history = new HistoryService();
const limit = 4;
const offset = ref(0);
const region = ref('US-NJ')

const loadMore = async () => {
  const data = await history.fetch(region.value, limit, offset.value, ['PowerBall'])
  
  results.value = {
    draws: [
      ...results.value.draws,
      ...data.draws
    ]
  }
}

watch(offset, loadMore)
watch(region, () => {
  results.value = {draws: []}
  offset.value = 0
  loadMore()
})

loadMore()

</script>


<template>
  <main>
    <select v-model="region">
      <option value="US-AR">Arkansas</option>
      <option value="US-CO">Colorado</option>
      <option value="US-MN">Minnesota</option>
      <option value="US-NJ">New Jersey</option>
      <option value="US-NY">New York</option>
      <option value="US-TX">Texas</option>
    </select>
    <div v-for="item of results.draws">
      {{ item.id }}
    </div>

    <button @click="offset+=limit">Load more ...</button>
  </main>
</template>
