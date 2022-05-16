<template>
  <div class="appointments">
    <div class="container" >
      <div class="app__nav" >
        <router-link :to="route.meta.previous"  ><ArrowLeftIcon  class="app__icon"/></router-link> 
        <div class="app__icon" ><AccountIcon /></div>
      </div>
      <div class="app__main-content" >
        <div class="main-content__title" >Take an appointment with</div>
        <div v-if="doctor" >
          <div class="app__small-card" >
            <SmallCard :item="doctor" />
          </div>
        </div>
        <div v-else >No Doctors Found Outside</div>
      </div>

      <div class="card__calendar">
          <div class="calendar__body"><CalendarComponent /></div>
      </div>
      <div class="card__actions">
          <button class="actions__btn">Prendre rendez-vous</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { useDisplay } from 'vuetify'

  import AccountIcon from 'vue-material-design-icons/AccountOutline.vue'; 
  import SearchIcon from 'vue-material-design-icons/Magnify.vue'; 
  import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';    
  
  import SmallCard from '../components/SmallCard.vue';  
  import CalendarComponent from '../components/CalendarComponent.vue';  
  import { images } from '../constants'  
  import { reactive, watch } from 'vue';
  import { useRoute } from 'vue-router';

  export default {
    name: 'appointments',
      components: {
        CalendarComponent,
        ArrowLeftIcon,
        SmallCard,
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

// STYLING

@media screen and (min-width: 500px) {

  .app__nav {
    display: none;
  }

  .app__main-content {

    margin-top: 2rem;

    .vc-weeks,
    .vc-pane {
      min-width: 180px;
    }
  }

  .card__actions {
      display: none;
    }
  .container{
    height: auto;
  }
        
}

// FOR MOBILES
@media screen and (max-width: 500px) {

  .appointments {
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

    .card__calendar {
      padding: 1rem 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
    }

    .card__actions {
      display: flex;
      justify-content: center;

      .actions__btn {
          background: var(--color-primary);
          color: var(--color-white);
          padding: 0.5rem 2.5rem;
          border-radius: 15px;
          min-width: 90%;
          font-size: 0.7rem;

      }
    }
  }



  .app__main-content {

    .main-content__title {
      font-weight: 500;
      margin-bottom: 1rem;
    }
  }

}

</style>
