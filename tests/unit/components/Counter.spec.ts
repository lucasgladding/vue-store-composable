import {createPinia} from 'pinia';
import {createStore} from 'vuex';
import {mount} from '@vue/test-utils';
import Counter from '@/components/Counter.vue';
import {options} from '@/store/vuex';

const mountComponent = () => {
    const store = createStore(options);
    return mount(Counter, {
        global: {
            plugins: [createPinia(), store]
        }
    });
};

describe('Counter', () => {
    it('loads the counter with the initial count', () => {
        const wrapper = mountComponent();
        const expected = 0;
        expect(wrapper.text()).toContain(`Count: ${expected}`);
    });

    it('increments the count using the increment button', async () => {
        const wrapper = mountComponent();
        const button = wrapper.find('button');
        await button.trigger('click');
        const expected = 1;
        expect(wrapper.text()).toContain(`Count: ${expected}`);
    });
});
