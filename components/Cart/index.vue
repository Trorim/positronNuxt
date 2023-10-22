<template>
    <div class="cart">
        <div class="cart-your">
            <div class="cart-header">
                <div class="cart-header__left">
                    <h2 class="cart__title">Ваша корзина</h2>
                    <p class="cart__productCount">
                        {{ store.countQuantity }} товара
                    </p>
                </div>
                <button class="cart-header__right" @click="store.emptyTrash()">
                    Очистить корзину
                </button>
            </div>
            <div class="cart__content">
                <div class="cart__items" v-if="store.cart.length > 0">
                    <CartItem
                        v-for="product in store.cart"
                        :key="product.id"
                        :product="product"
                    />
                    <CartInstall />
                </div>
                <div class="cart__empty" v-else>Нет товаров в корзине</div>
            </div>
        </div>
        <CartTotal />
    </div>
</template>

<script setup>
const store = useProductsStore();
</script>

<style lang="scss">
.cart {
    display: flex;
    justify-content: space-between;
    &__productCount {
        color: var(--main-color2);
    }
    &__empty {
        margin-top: 200px;
        text-align: center;
        font-size: 30px;
    }
    &-your {
        width: 800px;
    }
    &-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 20px;
        margin: 60px 0;
        &__left {
            display: flex;
            gap: 22px;
            align-items: baseline;
        }
        &__right {
            color: var(--main-color2);
            text-align: right;
            font-size: 14px;
            font-weight: 400;
            line-height: 150%;
            text-decoration-line: underline;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }
    &__title {
        font-size: 44px;
        font-weight: 700;
        line-height: 120.523%;
    }
    .cart__items {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .content {
        display: flex;
        justify-content: space-between;
    }
}
</style>
