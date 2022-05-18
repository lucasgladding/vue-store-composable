import {useCounterStore} from '@/store/pinia';
import {createPinia, setActivePinia} from 'pinia';

describe('counter', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('gets the initial count', () => {
        const state = useCounterStore();
        expect(state.count).toEqual(0);
    });

    it('can increment the count', () => {
        const state = useCounterStore();
        expect(state.count).toEqual(0);
        state.increment();
        expect(state.count).toEqual(1);
    });

    it('can get the double count', () => {
        const state = useCounterStore();
        state.increment();
        state.increment();
        state.increment();
        state.increment();
        expect(state.count).toEqual(4);
        expect(state.double).toEqual(8);
    });
});
