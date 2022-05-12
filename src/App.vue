<template>
  <v-app>
    <v-main>
      <router-view v-slot="{ Component }"  :key="$route.path"  >
        <transition name="route" mode="out-in">
          <component :is="Component" ></component>
        </transition>
      </router-view>

      <div class="app__snack-bar" >
        <div class="snack-bar__content" >
          <div class="app__icon" ><a href="/" ><HomeIcon class="app__icon" /></a></div>
          <div  class="snack-bar__arrows"  >
            <router-link v-if="route.meta.previous" :to="route.meta.previous" ><ChevronLeftIcon class="app__icon"  /></router-link>
            <div>
              <span> {{ route.meta.number }} </span> of 3 
            </div>
            <router-link 
              v-if="route.meta.next" 
              :to="route.meta.next" 
              >
                <ChevronRightIcon 
                  class="app__icon" 
                />
              </router-link>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>

import HomeIcon from 'vue-material-design-icons/Home.vue'; 
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue';   
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';  

import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';


export default {
  name: 'App',

  components: {
      HomeIcon,
      ChevronRightIcon,
      ChevronLeftIcon,
  },

  data: () => ({
    //
  }),
  setup() {

    const route = useRoute();

    console.debug(`current route name on component setup init: ${route.name}`);
    watch(() => route.name, () => {
      console.debug(`MyCoolComponent - watch route.name changed to ${route.name}`);

      console.debug(`MyCoolComponent - watch route.name changed to ${route.meta.number}`);

    // Optionally you can set immediate: true config for the watcher to run on init
    //}, { immediate: true });
    });

    return {
      route,
    }
    
  }
}
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --font-base-dm: "DM Sans", sans-serif;
  --font-base-poppins: "Poppins", sans-serif;

  // SECOND SETTINGS

  --color-primary: #0E7490;
  --color-secondary: #F59E0B;
  --color-white: #FFFFFF;
  --color-gray-900: #111827;
  --color-gray-100: #F3F4F6;
  --color-gray-500: #6B7280;
  --color-gray-border: #707070;
  --color-gray-snack-bar: #D1D5DB;
  --color-danger: #ff7782;
  --color-success: #41f1b6;
  --color-warning: #ffbb55;

  --card-border-radius: 2rem;
  --border-radius-1: 0.4rem;
  --border-radius-2: 0.8rem;
  --border-radius-3: 1.2rem;

  --card-padding: 1.8rem;
  --padding-1: 1.2rem;

  --box-shadow: 0 2rem 3rem var(--color-light);
}

* {
  font-family: var(--font-base-poppins), var(--font-base-dm), Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
  appearance: none;
  scroll-behavior: smooth;
  border: 0;
  text-decoration: none;
  list-style: none;
}

// Styling
@media screen and (min-width: 500px) {

  .app__snack-bar {
    display: none;
  }


}


// FOR MOBILES
@media screen and (max-width: 500px) {

  .app__snack-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-white);
    background: red;
    width: 100%;

    .snack-bar__content {
      position: fixed;
      bottom: 0;
      z-index: 100;
      color: var(--color-gray-500);
      padding: 2rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .snack-bar__arrows {
        display: flex;
        gap: 1rem;
        justify-content: center;
      }
    }
  }

}

.app__icon {
  cursor: pointer;
}

a {
  color: inherit; 
  text-decoration: inherit;
}

.center-text {
  text-align: center;
}

.btn-disabled {
  color: var(--color-gray-100);
  cursor: none;
}

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all 1s ease-out; 
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.route-leave-active {
  transition: all 1s ease-in; 
}

</style>
