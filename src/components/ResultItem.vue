<template>

    <article class="result-item">
        <h1 class="result-item__headline">POWERBALL</h1>
        <p class="result-item__date-time">{{ dateTime }}</p>
        <ul v-for="drawnNumbers of item.drawnNumbers" class="result-item__number-list">
            <template v-for="numbers of drawnNumbers.numbers">
            <li v-for="value of numbers.values" class="result-item__number" :class="'result-item__number--'+numbers.name.toLocaleLowerCase()">{{ value }}</li>
            </template>
        </ul>
    </article>

</template>

<script lang="ts">
import type { FinishedDrawPayload } from '@/types/FinishedDrawPayload';
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

    --hue: 160;
    --saturation: 100%;
    --brightness: 37%;

    background-color: hsla(var(--hue), var(--saturation), var(--brightness), .1);
    border: 1px solid hsla(var(--hue), var(--saturation), var(--brightness), 1);
    padding: 1rem;
    color: #eee;

    width: 100%;

    @media (min-width: 1024px) {
        width: calc(25% - .75rem);
    }

    &__date-time {
        font-size: 0.7rem;
        padding: 0 0 1rem 0;
    }

    &__number {
        border-radius: 50%;
        display: flex;
        width: 2rem;
        height: 2rem;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
        margin: .1rem;
        
        &--base {
            background-color: hsla(var(--hue), var(--saturation), var(--brightness), .5);
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