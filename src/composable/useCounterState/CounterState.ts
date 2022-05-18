import {Ref} from 'vue';

export interface CounterState {
    count: Ref<number>;
    double: Ref<number>;
    increment(): void;
}
