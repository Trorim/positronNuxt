<template>
    <div class="breadcrumbs">
        <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item">Главная</li>
            <li class="breadcrumbs__item breadcrumbs__item_active">Корзина</li>
        </ul>
    </div>
</template>

<style lang="scss">
.breadcrumbs {
    margin-top: 56px;
    &__list {
        display: flex;
        flex-wrap: wrap;
    }
    &__item {
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        &::after {
            content: url("~/assets/svg/arrow.svg");
            margin: 10px;
        }
        &:last-child {
            &::after {
                content: "";
            }
        }
        &_active {
            color: var(--main-color2);
        }
    }
}
</style>
