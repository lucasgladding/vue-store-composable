import {config} from '@/config';
import {Store} from '@/config/Config';
import {CounterState} from './CounterState';
import {useCounterState as useCounterStatePinia} from './useCounterStatePinia';
import {useCounterState as useCounterStateVueX} from './useCounterStateVueX';

export const useCounterState: () => CounterState = () => {
    const states: Record<Store, () => CounterState> = {
        [Store.pinia]: useCounterStatePinia,
        [Store.vuex]: useCounterStateVueX,
    };
    return states[config.store]();
};
