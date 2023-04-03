<script setup lang="ts">
import { ref, type Ref, watch } from 'vue';
import { HistoryService } from '@/services/HistoryService';
import type { DrawHistoryPayload } from '@/services/types/DrawHistoryPayload';
import ResultItem from '@/components/ResultItem.vue';

const results: Ref<DrawHistoryPayload> = ref({draws: []});
const history = new HistoryService();
const limit = 12;
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
    <template v-if="results.draws.length">
      <div class="result-list">
        <ResultItem v-for="item of results.draws" :key="item.id" :item="item"></ResultItem>
      </div>
      <button @click="offset+=limit">Load more ...</button>
    </template>
    <p v-else>loading ...</p>

    
  </main>
</template>

<style scope lang="scss">
main {
  padding-bottom: 3rem;
}

.result-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0 3rem;
  }  


  button {

    --brightness: 27%;

    cursor: pointer;
    background-color: hsl(160, 100%, var(--brightness));
    border: 0;
    padding: 1rem;
    color: #fff;

    &:hover {
      --brightness: 37%
    }
  }



</style>