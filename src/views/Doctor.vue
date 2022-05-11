<template>
  <div class="home">
    <div class="container" >
      <div class="app__nav" >
        <router-link :to="route.meta.previous"  ><ArrowLeftIcon  class="app__icon"/></router-link> 
        <div class="app__icon" ><AccountIcon /></div>
      </div>
      <div class="app__main-content" >
        <div v-if="doctor" >
          <div class="app__small-card" >
            <Card :item="doctor" />
          </div>
        </div>
        <div v-else >No Doctors Found Outside</div>
      </div>
    </div>
  </div>
</template>

<script>

  import { useDisplay } from 'vuetify'

  import AccountIcon from 'vue-material-design-icons/AccountOutline.vue'; 
  import SearchIcon from 'vue-material-design-icons/Magnify.vue'; 
  import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';    
  
  import Card from '../components/Card.vue';  
  import { images } from '../constants'   
  import { reactive, computed, watch } from 'vue';
  import { useRoute } from 'vue-router';

  export default {
    name: 'Home',
      components: {
        ArrowLeftIcon,
        Card,
        AccountIcon,
        SearchIcon,
    },
    setup () {
      const display = useDisplay()

      const doctor = reactive(
          { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 4, avatar: images.DoctorImg, },
        )

      const route = useRoute();

      console.debug(`current route name on component setup init: ${route.name}`);
      watch(() => route.name, () => {
        console.debug(`MyCoolComponent - watch route.name changed to ${route.name}`);

        console.debug(`MyCoolComponent - watch route.name changed to ${route.meta.number}`);
      })

      return {
        display,
        doctor,
        route,
      }
    }
  }
</script>
<style lang="scss" scoped >

// FOR MOBILES
@media screen and (max-width: 500px) {

  .home {
    padding: 1rem;
  }

  .container {
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid  #d9dde5;
    margin-bottom: 1rem;
    height: 80vh;
    overflow-y: scroll;

    .app__nav {
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
      .nav__brand {
        color: var(--color-primary);
        font-weight: 700;
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        span:last-child {
          margin-top: -0.5rem;
        }
      }
      .app__icon {
        
        span svg {
          font-size: 1rem;
          font-weight: 100;
          width: 2rem;
          height: 2rem;
          background: var(--color-gray-100);
          color: var(--color-gray-border);
          border-radius: 30%;
          padding: 0.1rem;
        }
      }
    }

    .app__header {

      .header__search-area {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .search-area__text {
          color: var(--color-gray-900);
          font-weight: 700;
        }

        .search-area__input-field {
          color: var(--color-gray-500);
          background: var(--color-gray-100);
          width: 100%;
          height: 40px;
          border-radius: 10px;
          padding: 10px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;

          input {
            flex: auto;
            width: 80%;
          }

          span svg {
            color: var(--color-gray-500);
          }
        }
      }
    }
  }

}

.app__date-picker {
  border: none;
}

</style>

