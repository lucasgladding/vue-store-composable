type State = {
    count: number,
};

const getters = {
    double(state: State): number {
        return state.count * 2;
    }
};

const mutations = {
    increment(state: State) {
        state.count++;
    }
};

const actions = {
    increment({ commit }: {commit: (name: string) => void}) {
        commit('increment');
    }
};

export const options = {
    state: () => ({ count: 0 }),
    getters,
    mutations,
    actions,
};
