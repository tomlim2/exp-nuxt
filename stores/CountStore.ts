import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCountStore = defineStore('CountStore', {
    state: () => ({ count: 0, name: 'Eduardo' }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot));
}