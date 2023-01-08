import { defineStore } from 'pinia'

export const MenuStore = defineStore('MenuStore', {
    state: () => ({
        languages: ['es', 'en'],
        mobileMenuOpen: false,
        category: [
            { name: "Menú", to: "/subcategory", data: "test1" },
            { name: "Entrantes y platos", to: "/subcategory", data: "test2" },
            { name: "Pizzas", to: "/subcategory", data: "test3" },
            { name: "Bebidas", to: "/subcategory", data: "test4" },
        ],
        selected: {}
    }),
    actions: {
        setMobileMenuOpen(IsOpen) {
            this.mobileMenuOpen = IsOpen
        },
        setSelected(id) {
            this.selected = id
        }
    },
    getters: {
        mobile() {
            return this.mobileMenuOpen
        },
        getSelected() {
            return this.selected
        }
    }
})