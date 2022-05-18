import {computed} from 'vue';
import {useStore} from 'vuex';
import {CounterState} from './CounterState';

export const useCounterState: () => CounterState = () => {
    const store = useStore();
    const count = computed(() => store.state.count);
    const double = computed(() => store.getters.double);
    const increment = () => store.dispatch('increment');
    return {count, double, increment};
};
