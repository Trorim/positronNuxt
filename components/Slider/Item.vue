<template>
    <div class="card-item">
        <div>
            <img
                class="card-item__img"
                :src="product.img"
                alt="Card item
            image"
            />
            <h4 class="card-item__title">{{ product.title }}</h4>
            <p class="card-item__descr">
                {{
                    product.descr.length > 100
                        ? product.descr.slice(0, 98) + "..."
                        : product.descr
                }}
            </p>
        </div>
        <div class="card-item__prices">
            <b class="card-item__priceRub">
                {{ product.priceRubMin }} ₽ - {{ product.priceRubMax }} ₽
            </b>
            <p class="card-item__priceEur">
                {{ product.priceEurMin }} € - {{ product.priceEurMax }} €
            </p>
            <UIBtn @click="store.addProductToCart(product)"> Подробнее </UIBtn>
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
        product: [Object],
    },
};
</script>

<style lang="scss">
.card-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 303px;
    height: 563px;
    background-color: #f6f8fa;
    border-radius: 5px;
    padding: 25px;
    &__img {
        width: 245px;
        height: 245px;
        margin: 0 auto;
    }
    &__title {
        margin-top: 5px;
        font-size: 22px;
        font-weight: 700;
        text-align-last: left;
        line-height: 120.523%;
    }
    &__descr {
        margin-top: 5px;
        font-size: 14px;
        font-weight: 400;
        line-height: 145%;
    }
    &__priceRub {
        font-family: Roboto, sans-serif;
        font-size: 22px;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: 0.11px;
    }
    &__priceEur {
        margin: 5px 0 20px;
        color: var(--main-color2);
        font-size: 16px;
        font-weight: 400;
        line-height: 145%;
    }
}
</style>
