<template>
  <DatePicker 
    v-model="date" 
    title-position="left" 
    color="blue"
    is-range
    is-expanded
    class="app__date-picker"
    :style="{border: `${amount}px`}" 
  />
</template>

<script>

import { computed } from "vue"
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';

export default {
  name:'Calendar Component',
  props: {

  },
  components: {
    Calendar,
    DatePicker,
  },
  data() {
    return {
      //date: new Date(),
    };
  },
  setup() {
 
    const  date = computed(() => {
      return new Date()
    });

    return {
      date,
    }

  }
}

</script>

<style lang="scss" scoped >

.app__date-picker  {
  width: 100%;
  border: none;
}

</style>