<template>
    <div class="my-swiper">
        <h3 class="section-title">Просмотренные товары</h3>
        <Swiper
            :slides-per-view="4"
            :space-between="50"
            :pagination="{
                type: 'fraction',
            }"
            :navigation="true"
            :modules="[SwiperNavigation, SwiperPagination]"
        >
            <SwiperSlide
                v-for="product in store.products"
                :product="product"
                :key="product.id"
            >
                <SliderItem :product="product" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
const store = useProductsStore();
</script>

<style lang="scss">
.my-swiper {
    position: relative;
    margin-top: 96px;
}
.swiper {
    position: static;
}
.section-title {
    margin-bottom: 60px;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 120.523%;
}
.swiper-button-next,
.swiper-button-prev {
    position: absolute;
    z-index: 20;
    top: 20px;
    right: 0px;
    background-color: #90a2b5;
    color: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    &:after {
        font-size: 20px;
        font-weight: 600;
    }
}

.swiper-button-prev {
    left: 1100px;
}

.swiper-pagination-horizontal {
    position: absolute;
    top: 12px;
    left: 1166px;
    width: 50px;
    color: var(--main-color2);
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
}

.swiper-pagination-current {
    color: var(--main-color1);
    font-size: 24px;
    font-weight: 500;
}
</style>
