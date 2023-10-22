<template>
    <div class="install">
        <input type="checkbox" @click="store.equipmentInstal()" />
        <IconsInstall />
        <div class="install__text">
            <b class="">Установка</b>
            <p>
                Отметьте, если Вам необходима консультация профессионала по
                монтажу выбранных товаров.
            </p>
        </div>
    </div>
</template>

<script setup>
const store = useProductsStore();
</script>

<style lang="scss">
.install {
    margin-top: 50px;
    display: flex;
    gap: 30px;
    align-items: center;
    border-radius: 5px;
    background-color: #f6f8fa;
    padding: 28px 25px;
    &__text {
        font-size: 16px;
        font-weight: 600;
        line-height: 145%;
    }
}
</style>
