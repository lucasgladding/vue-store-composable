import {computed} from 'vue';
import {useCounterStore} from '@/store/pinia';
import {CounterState} from './CounterState';

export const useCounterState: () => CounterState = () => {
    const store = useCounterStore();
    const count = computed(() => store.count);
    const double = computed(() => store.double);
    const increment = store.increment;
    return {count, double, increment};
};
