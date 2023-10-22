<template>
    <div class="cart-item">
        <img class="cart-item__img" :src="product.img" alt="img" />
        <div class="cart-item__text">
            <h4 class="cart-item__title">
                {{ product.type }} {{ product.title }}
            </h4>
            <p class="cart-item__descr">{{ product.feature }}</p>
            <p class="cart-item__vendor">Артикул: {{ product.vendor }}</p>
        </div>
        <div class="cart-item__quantity">
            <div class="cart-item__quantity__btns">
                <button class="quantity" @click="store.decrease(product)">
                    -
                </button>
                <span class="quantity">{{ product.quantity }}</span>
                <button class="quantity" @click="store.increase(product)">
                    +
                </button>
            </div>
            <p v-if="product.quantity > 1">{{ product.priceRub }} ₽/шт.</p>
        </div>
        <b class="cart-item__priceRub">
            {{ product.priceRub * product.quantity }}
            ₽</b
        >
        <div
            class="cart-item__delete"
            @click="store.deleteProductToCart(product)"
        >
            X
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const store = useProductsStore();
        return { store };
    },
    props: {
        product: {
            type: Object,
        },
    },
};
</script>

<style lang="scss">
.cart-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 800px;
    height: 130px;
    border-bottom: 1px solid #c4c4c4;
    padding: 25px 50px;
    &__quantity {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        .quantity {
            display: inline-block;
            padding: 5px;
            margin: 0 2px;
            width: 35px;
            height: 35px;
            background-color: #f6f8fa;
            border: none;
            color: var(--main-color1);
            text-align: center;
            font-size: 14px;
            font-weight: 400;
            line-height: 150%;
        }
    }
    &:last-child {
        border-bottom: none;
    }
    &__text {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 263px;
    }
    &__img {
        width: 100px;
        height: 100px;
    }
    &__delete {
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
    }
}
</style>
