
<template>
    <div class="card-container" v-if="item" >
        <div class="card__img">
            <img :src="item.avatar" alt="avatar" />
        </div>
        <div class="card__divider">
            <span></span>
        </div>
        <div class="card__details">
            <div class="details__name">Dr.{{ item.first_name }} {{ item.last_name }}</div>
            <div class="deatils__option">{{ item.option }}</div>
            <div class="details__institut">{{ item.institut }}</div>
            <div class="details__loaction">
                <div>
                    <LocationIcon size="14" />
                    <span>{{ item.location}} </span>
                </div>
                <StarRatings calss="ratings__stars" v-model="item.rating" :showControl="false" height="1rem" :starSize="8" starColor="#ff9800" />
            </div>         
        </div>  
    </div>
</template>

<script>

  import { ref, reactive } from 'vue';
  import LocationIcon from 'vue-material-design-icons/MapMarker.vue'; 
  import StarRatings from "vue3-star-ratings";
  import { images } from '../constants'


  export default {

    name: 'Small Card',
    props: {
        item: {
            type: Object,
        }
    },
    methods: {
    },
    components: {
        StarRatings,
        LocationIcon,
    },

    setup () {
        const doctor = reactive(
            { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 3, avatar: images.DoctorImg, }
        )
        
        const ratings = ref(4)
        return {
            doctor,
            ratings,
            images,
            avatar: images.DoctorImg,
        }
    }
}
</script>

<style lang="scss" scoped >

// FOR MOBILES
@media screen and (max-width: 500px) { 

    .card-container {
        display: flex;
        align-items: center;
        gap: 1rem;

        .card__img {
            width: 30%;

            img {
                width: 100%;
                height: 100%;
                border-radius: 10%;
            }
        }

        .card__divider {
            position: relative;
            display: flex;
            align-items: center;
            width: 4px;
            height: 5rem;

            span {
                position: absolute;
                bottom: 20%;
                width: 2px;
                height: 50%;
                background: var(--color-primary);
                opacity: 0.8;
                box-shadow: var(--box-shadow);
            }
        }
        .card__details {
            position: relative;
            color: var(--color-gray-500);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 70%;

            .details__name {
                color: var(--color-primary);
                font-size: 0.7rem;
            }
            .deatils__option {
                font-size: 0.7rem;
            }
            .details__institut {
                color: var(--color-gary-100);
                font-size: 0.8rem;
            }
            .details__loaction {
                font-size: 0.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                flex-wrap: wrap;

                div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                }

                .ratings__stars {
                    height: 1rem;
                    padding: 0 ;
                    
                }
                .vue3-star-ratings__wrapper {
                    padding: 0 ;  
                    margin: 0;
                }
            }
            
        }
    }

}

@media screen and (max-width: 280px) {
    .card-container {

        .card__img {
                display: none;

            img {
                display: none;
             }
        }
    }
}

</style>