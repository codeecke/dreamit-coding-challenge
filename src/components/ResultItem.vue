<template>

    <article class="result-item">
        <h1 class="result-item__headline">POWERBALL</h1>
        <p>{{ dateTime }}</p>
        <ul v-for="drawnNumbers of item.drawnNumbers" class="result-item__number-list">
            <template v-for="numbers of drawnNumbers.numbers">
            <li v-for="value of numbers.values" class="result-item__number" :class="'result-item__number--'+numbers.name.toLocaleLowerCase()">{{ value }}</li>
            </template>
        </ul>
    </article>

</template>

<script lang="ts">
import type { FinishedDrawPayload } from '@/services/types/FinishedDrawPayload';
import type { PropType } from 'vue'
import { defineComponent, computed } from 'vue'
import moment from 'moment';

export default defineComponent({
    name: 'ResultItem',
    props: {
        item: {
            required: true,
            type: Object as PropType<FinishedDrawPayload>
        }
    },
    setup(props) {
        return {
            dateTime: computed(() => {
                const drawDate: string | null = props?.item?.drawDate;
                if(!drawDate) return;
                const dateTime = moment(drawDate)
                return dateTime.format('YYYY-MM-DD HH:MM')
            })
        }
    }
})
</script>

<style scoped lang="scss">
.result-item {

    background-color: #eee;
    margin-bottom: 3rem;
    padding: 1rem;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
    border: 1px solid #ccc;
    color: rgb(110, 110, 110);

    &__number {
        background-color: #eee;
        border-radius: 50%;
        display: flex;
        width: 2rem;
        height: 2rem;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
        margin: .1rem;
        
        &--base {
            background-color: #c4d1f4;
        }
        
        &--extra {
            background-color: #000;
            color: #fff;
        }
        
        &--powerplay {
            background-color: #fff;
            color: #000;
        }
    }
    
    &__number-list {
        display: flex;
        flex-direction: row;
        padding: 0;
    }
}
</style>