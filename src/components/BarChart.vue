<template>
    <div class="chart-container">
        <div class="chart-container__amount" :style="{width: `${amount}px`}" >
        </div>
    </div>
</template>

<script>
    export default {
        name:"Bar Chart",
        props:{
            amount: Number,
            default: 0,
        },
        components: {

        },
        setup () {

        },

    }
</script>

<style lang="scss" >

.chart-container {
    background: var(--color-gray-500);
    height: 4px;
    border-radius: 10px;
    //width: 150px;
    width: 100%;

    .chart-container__amount {
        background: var(--color-primary); 
        height: 100%;
    }
}

</style>