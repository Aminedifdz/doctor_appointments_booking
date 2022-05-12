<template>
  <div class="home">
    <div class="container" >
      <div class="app__nav" >
        <div class="nav__brand" >
          <span>DO</span>
          <span>CS</span>
        </div>
        <div class="app__icon" ><AccountIcon /></div>
      </div>
      <div class="app__header" >
        <div  class="header__search-area">
          <div class="search-area__text" >Let's find tou a doctor</div>
          <div>
            <div class="search-area__input-field" >
              <input type="text" name="search" placeholder="Search..." class="search-input">
              <SearchIcon /> 
            </div> 
            <div class="header__dropdown">
              <button class="dropbtn" >Location <MenuDownIcon /></button>
              <div class="dropdown-content" @click="popup=true">
                <a href="#">Location 1</a>
                <a href="#">Location 2</a>
                <a href="#">Location 3</a>
              </div>
            </div>
  
          </div>
        </div>
      </div>
      <div class="app__main-content" >
        <div class="main-content__filters">
          <div class="app__icon" ><FilterIcon /></div>
        </div>
        <div v-if="doctors" class="main-content__body" >
          <div v-for="item in doctors" :key="item.last_name" class="app__small-card" >
            <router-link to="/doctor" >
              <SmallCard class="main-content__card" :item="item" />
            </router-link>
          </div>
        </div>
        <div v-else >No Doctors Found Outside</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive, ref } from 'vue'
  import { useDisplay } from 'vuetify'

  import AccountIcon from 'vue-material-design-icons/AccountOutline.vue'; 
  import SearchIcon from 'vue-material-design-icons/Magnify.vue'; 
  import MenuDownIcon from 'vue-material-design-icons/MenuDown.vue';  
  import FilterIcon from 'vue-material-design-icons/FilterOutline.vue';  
  
  import SmallCard from '../components/SmallCard.vue';  
  import { images } from '../constants'  

  export default {
    name: 'Home',
      components: {
        FilterIcon,
        SmallCard,
        AccountIcon,
        MenuDownIcon,
        SearchIcon,
    },
    setup () {
      const display = useDisplay()

      let popup = ref(false)

      const doctors = reactive([
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

      return {
        display,
        doctors,
        popup,
      }
    }
  }
</script>
<style lang="scss" >

// Styling
@media screen and (min-width: 500px) {

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;

    .app__nav {
      position: fixed;
      padding: 1rem 0;
      display: flex;
      background: var(--color-primary);
      width: 100%;
      padding: 1rem 2rem;
      margin-bottom: 2rem;
      justify-content: space-between;
      .nav__brand {
        color: var(--color-white);
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
  }

  .app__header {
    display: flex;
    width: 100%;
    margin-top: 1.5rem;
    z-index: 100;
    justify-content: center;

    .header__search-area {
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .search-area__text {
        color: var(--color-white);
        margin-left: -1rem;
        font-weight: 700;
      }

      div {
        display: flex;
        gap: 2rem;

          .search-area__input-field {
          color: var(--color-gray-500);
          background: var(--color-gray-100);
          width: 80%;
          height: 40px;
          margin-top: -0.5rem;
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

        .dropbtn {
          background: var(--color-gray-100);
          color: var(--color-gray-500);
          height: 40px;
          margin-top: -0.5rem;
          border-radius: 10px;
          padding: 10px 10px;
          width: 10rem;
          display: flex;
          justify-content: space-between;
        }
        
        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background: var(--color-gray-100);
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }
        
        .dropdown-content a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }
        
        .dropdown-content a:hover {background-color: var(--color-gary-100);}
        
        .dropdown:hover .dropdown-content {display: block;}
        
        .dropdown:hover .dropbtn {
                background-color: var(--color-gray-900);
                }
              }
            }
          }

  .app__main-content {
    width: 100%;
    margin-top: 2rem;
    padding: 1rem 3rem;
    .main-content__body {

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.6rem;

      .app__small-card {
        margin: 0.5rem 0.5rem;
      }
    }

    .main-content__filters {
      display: flex;
      justify-content: flex-end;

      .app__icon {
        
        span svg {
          font-size: 1rem;
          font-weight: 100;
          width: 2rem;
          height: 2rem;
          background: var(--color-gray-100);
          color: var(--color-gray-border);
          border-radius: 30%;
          padding: 0.3rem;
        }
      }
    }
    
  }

}

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
          width: 3rem;
          height: 3rem;
          background: var(--color-gray-100);
          color: var(--color-gray-border);
          border-radius: 30%;
          padding: 0.2rem;
        }
      }
    }

    .app__header {

      .header__dropdown {
        display: none;
      }

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

    .app__main-content {
      .main-content__card {
        margin-top: 1rem;
      }

      .main-content__filters { 
        display: none;
      }
    }
  }

}

</style>
