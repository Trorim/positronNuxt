<template>
    <header>
        <div class="header-cart">
            <IconsCart />
            <div class="header-cart__text">
                <p class="header-cart__title">Ваша корзина</p>
                <p class="header-cart__products">
                    {{ store.countQuantity }} товара
                </p>
                <p>
                    {{ store.totalCost }}
                    ₽
                </p>
            </div>
        </div>
        <HeaderBreadCrumbs />
    </header>
</template>

<script setup>
const store = useProductsStore();
</script>

<style lang="scss">
.header-cart {
    margin-top: 82px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-end;
    &__text {
        font-size: 12px;
        font-weight: 400;
        line-height: 145%;
    }
    &__title {
        font-size: 14px;
    }
    &__products {
        color: var(--main-color2);
    }
}
</style>
