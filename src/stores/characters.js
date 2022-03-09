import { defineStore } from 'pinia'

export const charactersStore = defineStore({
  id: 'characters',
  state: () => ({
    items: []
  }),
  getters: {
    Items: (state) => state.items
  },
  actions: {
    add(characters) {
        this.items = []
        this.items = [... characters]
    }
  }
})
