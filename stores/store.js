import { defineStore } from "pinia";

export const useProductsStore = defineStore("productStore", {
    state: () => ({
        products: [
            {
                id: 1,
                img: "1.png",
                title: "BXC",
                descr: "Вытяжное устройство для механической системы вентиляции",
                priceRub: 6000,
                priceRubMin: 6848,
                priceRubMax: 56584,
                priceEur: 77,
                priceEurMin: 77.6,
                priceEurMax: 643.86,
                link: "#",
                vendor: "G2H1065",
                feature:
                    "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                type: "Вытяжное устройство",
                quantity: 1,
            },
            {
                id: 2,
                img: "2.png",
                title: "G2H",
                descr: "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
                priceRub: 7000,
                priceRubMin: 6848,
                priceRubMax: 56584,
                priceEur: 77,
                priceEurMin: 77.6,
                priceEurMax: 643.86,
                link: "#",
                vendor: "G2H1065",
                feature:
                    "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                type: "Вытяжное устройство",
                quantity: 1,
            },
            {
                id: 3,
                img: "3.png",
                title: "GHN",
                descr: "Вытяжное устройство с датчиком присутствия",
                priceRub: 6800,
                priceRubMin: 6848,
                priceRubMax: 56584,
                priceEur: 77,
                priceEurMin: 77.6,
                priceEurMax: 643.86,
                link: "#",
                vendor: "G2H1065",
                feature:
                    "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                type: "Вытяжное устройство",
                quantity: 1,
            },
            {
                id: 4,
                img: "4.png",
                title: "TDA",
                descr: "Вытяжное устройство с датчиком присутствия",
                priceRub: 6900,
                priceRubMin: 6848,
                priceRubMax: 56584,
                priceEur: 77,
                priceEurMin: 77.6,
                priceEurMax: 643.86,
                link: "#",
                vendor: "G2H1065",
                feature:
                    "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                type: "Вытяжное устройство",
                quantity: 1,
            },
            {
                id: 5,
                img: "1.png",
                title: "BXC",
                descr: "Вытяжное устройство для механической системы вентиляции",
                priceRub: 6000,
                priceRubMin: 6848,
                priceRubMax: 56584,
                priceEur: 77,
                priceEurMin: 77.6,
                priceEurMax: 643.86,
                link: "#",
                vendor: "G2H1065",
                feature:
                    "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                type: "Вытяжное устройство",
                quantity: 1,
            },
            {
                id: 6,
                img: "2.png",
                title: "G2H",
                descr: "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
                priceRub: 7000,
                priceRubMin: 6848,
                priceRubMax: 56584,
                priceEur: 77,
                priceEurMin: 77.6,
                priceEurMax: 643.86,
                link: "#",
                vendor: "G2H1065",
                feature:
                    "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                type: "Вытяжное устройство",
                quantity: 1,
            },
            {
                id: 7,
                img: "3.png",
                title: "GHN",
                descr: "Вытяжное устройство с датчиком присутствия",
                priceRub: 6800,
                priceRubMin: 6848,
                priceRubMax: 56584,
                priceEur: 77,
                priceEurMin: 77.6,
                priceEurMax: 643.86,
                link: "#",
                vendor: "G2H1065",
                feature:
                    "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                type: "Вытяжное устройство",
                quantity: 1,
            },
            {
                id: 8,
                img: "4.png",
                title: "TDA",
                descr: "Вытяжное устройство с датчиком присутствия",
                priceRub: 6900,
                priceRubMin: 6848,
                priceRubMax: 56584,
                priceEur: 77,
                priceEurMin: 77.6,
                priceEurMax: 643.86,
                link: "#",
                vendor: "G2H1065",
                feature:
                    "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                type: "Вытяжное устройство",
                quantity: 1,
            },
            {
                id: 9,
                img: "4.png",
                title: "TDA",
                descr: "Вытяжное устройство с датчиком присутствия",
                priceRub: 6900,
                priceRubMin: 6848,
                priceRubMax: 56584,
                priceEur: 77,
                priceEurMin: 77.6,
                priceEurMax: 643.86,
                link: "#",
                vendor: "G2H1065",
                feature:
                    "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
                type: "Вытяжное устройство",
                quantity: 1,
            },
        ],
        cart: [],
        equipmentInstallation: false,
    }),
    getters: {
        countQuantity(state) {
            return state.cart.reduce(
                (acc, cur) => (acc += 1 * cur.quantity),
                0
            );
        },
        totalCost(state) {
            return state.cart.reduce((acc, cur) => {
                return (acc += cur.priceRub * cur.quantity);
            }, 0);
        },
    },
    actions: {
        addProductToCart(product) {
            if (this.cart.includes(product)) {
                let index = this.cart.indexOf(product);
                this.cart[index].quantity += 1;
            } else {
                this.cart.push(product);
            }
        },
        emptyTrash() {
            this.cart.map((item) => (item.quantity = 1));
            this.cart.length = 0;
            this.toggleInstal();
        },
        deleteProductToCart(product) {
            let index = this.cart.indexOf(product);
            this.cart[index].quantity = 1;
            this.cart.splice(index, 1);
            this.toggleInstal();
        },
        increase(product) {
            let index = this.cart.indexOf(product);
            this.cart[index].quantity += 1;
        },
        decrease(product) {
            let index = this.cart.indexOf(product);
            if (this.cart[index].quantity === 1) {
                this.cart[index].quantity = 1;
                this.cart.splice(index, 1);
            } else {
                this.cart[index].quantity -= 1;
            }
            this.toggleInstal();
        },
        toggleInstal() {
            if (this.cart.length === 0) {
                this.equipmentInstallation = false;
            }
        },
        equipmentInstal() {
            this.equipmentInstallation = !this.equipmentInstallation;
        },
        async postData() {
            if (this.cart.length > 0) {
                await fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.cart),
                })
                    .then((response) => {
                        console.log(response);
                        if (response.status === 204) {
                            return new Promise((resolve) => resolve(null));
                        }
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .then(() => {
                        this.cart.length = 0;
                    });
            }
        },
    },
});
