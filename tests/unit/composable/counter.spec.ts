import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {createStore} from 'vuex';
import {options} from '@/store/vuex';
import {useCounterState as useCounterStatePinia} from '@/composable/useCounterState/useCounterStatePinia';
import {useCounterState as useCounterStateVueX} from '@/composable/useCounterState/useCounterStateVueX';

export function withSetup<T>(composable: () => T): T {
    let result: T;
    const app = createApp({
        setup() {
            result = composable();
            return () => {};
        }
    });
    const pinia = createPinia();
    const store = createStore(options);
    app.use(pinia).use(store).mount(document.createElement('div'));
    return result!;
}

describe.each([
    ['pinia', useCounterStatePinia],
    ['vuex', useCounterStateVueX],
])('useCounterState using %s', (name, composable) => {
    it('gets the initial state', () => {
        const state = withSetup(composable);
        expect(state.count.value).toEqual(0);
    });

    it('can increment the count', () => {
        const state = withSetup(composable);
        expect(state.count.value).toEqual(0);
        state.increment();
        expect(state.count.value).toEqual(1);
    });

    it('can get the double count', () => {
        const state = withSetup(composable);
        expect(state.count.value).toEqual(0);
        state.increment();
        expect(state.count.value).toEqual(1);
        expect(state.double.value).toEqual(2);
    });
});
