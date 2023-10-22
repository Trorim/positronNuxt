<template>
    <div class="total">
        <div>
            <p class="total__title">Итого</p>
            <div class="total__descr">
                <div class="total__text">
                    <p>Сумма заказа</p>
                    <p>{{ store.totalCost }} ₽</p>
                </div>
                <div class="total__text">
                    <p>Количество</p>
                    <p>{{ store.countQuantity }} шт</p>
                </div>
                <div class="total__text">
                    <p>Установка</p>
                    <p>
                        {{ store.equipmentInstallation ? "Да" : "Нет" }}
                    </p>
                </div>
                <div class="devider"></div>
                <div class="total__text">
                    <p>Стоимость товаров</p>
                    <b> {{ store.totalCost }} ₽ </b>
                </div>
            </div>
            <div class="btns">
                <UIBtn @click="store.postData()">Оформить заказ</UIBtn>
                <UIBtn @click="store.postData()" class="btn_white"
                    >Купить в один клик</UIBtn
                >
            </div>
        </div>
    </div>
</template>

<script setup>
const store = useProductsStore();
</script>

<style lang="scss">
.total {
    margin-top: 150px;
    padding: 30px;
    width: 425px;
    height: 458px;
    border-radius: 5px;
    background-color: #f6f8fa;
    font-size: 24px;
    font-weight: 600;
    line-height: 120.523%;
    &__title {
        color: var(--main-color1);
        font-size: 24px;
        font-weight: 600;
        line-height: 120.523%;
    }
    &__descr {
        margin-top: 31px;
    }
    &__text {
        margin-top: 18px;
        display: flex;
        justify-content: space-between;
        align-items: last baseline;
        font-size: 16px;
        font-weight: 500;
    }
}
.devider {
    margin-top: 29px;
    width: 365px;
    height: 1px;
    background-color: var(--main-color2);
}
.btns {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
