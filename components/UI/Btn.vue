<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style lang="scss">
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 52px;
    padding: 15px 50px;
    gap: 10px;
    border-radius: 4px;
    background: #0069b4;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border: 1px solid #0069b4;
    cursor: pointer;
    &_white {
        background: #fff;
        color: #0069b4;
    }
}
</style>
