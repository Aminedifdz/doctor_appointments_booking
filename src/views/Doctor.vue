<template>
  <div class="doctor">
    <aside>
     <div class="side-bar__title" >Similiar</div>
      <div v-for="item in doctorsSimiliars" :key="item.last_name" class="app__small-card" >
        <router-link to="/doctor" >
          <SmallCard class="main-content__card" :item="item" />
        </router-link>
      </div>
    </aside>
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
      <div class="main-content__left-bar">
        <div class="left-bar__actions">
            <button  @click="popup=true" class="actions__btn">Prendre rendez-vous</button>
        </div>
        <div v-for="item in doctorsSimiliars" :key="item.last_name" class="app__small-card" >
          <router-link to="/doctor" >
            <MiniSmallCard class="main-content__card" :item="item" />
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="popup" class="app__modal">
      <CloseIcon @click="popup=false" class="close-icon" />
      <Appointments  class="modal__appointments" />
      <div class="modal__actions">
          <button  @click="popup=false" class="actions__btn">Confirmer</button>
      </div>
    </div>
  </div>
  <div v-if="popup" @click="popup=false" class="overlay" ></div>
</template>

<script>

  import { useDisplay } from 'vuetify'

  import AccountIcon from 'vue-material-design-icons/AccountOutline.vue'; 
  import SearchIcon from 'vue-material-design-icons/Magnify.vue'; 
  import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';  
  import CloseIcon from 'vue-material-design-icons/Close.vue';      
  
  import Card from '../components/Card.vue';
  import SmallCard from '../components/SmallCard.vue';  
  import MiniSmallCard from '../components/MiniSmCard.vue';    
  import Appointments from './Appointments.vue';  
  import { images } from '../constants'   
  import { reactive, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';

  export default {
    name: 'doctor',
      components: {
        CloseIcon,
        ArrowLeftIcon,
        Card,
        SmallCard,
        AccountIcon,
        SearchIcon,
        MiniSmallCard,
        Appointments,
    },
    setup () {
      const display = useDisplay()

      let popup = ref(false)

      const doctor = reactive(
          { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 4, avatar: images.DoctorImg, },
        )

      const doctorsSimiliars = reactive([
          { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 4, avatar: images.DoctorImg, },
          { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 4, avatar: images.DoctorImg, },
          { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 4, avatar: images.DoctorImg, },
          { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 4, avatar: images.DoctorImg,},
          { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 4, avatar: images.DoctorImg,},
          { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 4, avatar: images.DoctorImg, },
          { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 4, avatar: images.DoctorImg,},
          { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 4, avatar: images.DoctorImg, },
          { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 4, avatar: images.DoctorImg, },
          { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 4, avatar: images.DoctorImg, },
       
        ])

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
        doctorsSimiliars,
        popup,
      }
    }
  }
</script>
<style lang="scss" scoped >

//STYLING

@media screen and (min-width: 500px) {

  .doctor {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

  }

  aside {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 25%;
    background: red;
    box-shadow: 0 2rem 3rem var(--color-gray-500);
    background: var(--color-white);
    z-index: 100;
    padding: 2rem 1rem 1rem 1rem;
    overflow-y: scroll;

    .side-bar__title {
      text-align: center;
      font-weight: 500;
      padding: 1rem 0 2rem 0;
    }
  }

  .container {
    position: relative;
    margin-left:25%;
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow-y: scroll;

    .app__nav {
      position: absolute;
      height: 10rem;
      padding-top: 2rem;
      
    }

    .app__main-content {
      margin-top: 10rem;
      display: flex;
      flex-direction: row;
      width: 70%;
    }

    .main-content__left-bar {
      margin-top: 12rem;
      margin-right: 2rem;
      display: flex;
      flex-direction: column;
      width: 30%;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;

      div {
        margin: 0.2rem;
      }

      .left-bar__actions {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;

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



    @media screen and (max-width: 750px) {
      flex-direction: column;
      align-items: center;
    }

  }

}

// FOR MOBILES
@media screen and (max-width: 500px) {


  aside {
    display: none;
  }

  .doctor {
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

  .main-content__left-bar {
    display: none;
  }

}

.app__date-picker {
  border: none;
}

.app__modal {
  position: absolute;
  //display: none;
  top: 5%;
  left: 30%;
  //min-width: 35%;
  width: 40%;
  //height: auto;
  background: var(--color-white);
  box-shadow: 0 2rem 3rem var(--color-gray-500);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  z-index: 100;

  .appointment {
    .app__main-content {
      margin-top: 2rem;
    }
  }

  .modal__actions {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;

      .actions__btn {
          background: var(--color-primary);
          color: var(--color-white);
          padding: 0.5rem 2.5rem;
          border-radius: 15px;
          min-width: 90%;
          font-size: 0.7rem;

      }
    }


  @media screen and (max-width:500px) {
    display: none;
  }
}

.close-icon {
  position: absolute;
  background: #000;
  color: var(--color-white);
  opacity: 0.9;
  border-radius: 50%;
  padding: 0.2rem;
  display: flex;
  right: 5%;
  top: -3%;
  cursor: pointer;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  //background: var(--color-gary-100);
  transition: opacity 200ms;
  //visibility: hidden;
  opacity: 0.9;
  //height: 100%;
  //height: 100vh;

  @media screen and (max-width:500px) {
    display: none;
  }
}

</style>

