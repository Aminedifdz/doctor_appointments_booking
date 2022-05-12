
<template>
    <div class="card-container" v-if="item" >
        <div>
            <div class="card__img">
                <img :src="item.avatar" alt="avatar" />
            </div>
            <div class="card__divider">
                <span></span>
            </div>
            <div class="card__details">
                <div class="details__name">Dr.{{ item.first_name }} {{ item.last_name }}</div>
                <div class="deatils__option">  1 month ago</div>       
            </div> 
        </div>
        <div class="details__description">
            Many Thanks To Doctor Amine Mahdaoui He Is Professional and Competent
        </div>  
        <div calss="card__ratings-stars" 
            :style="{
                display: 'flex',
                gap: '0.1rem',
                color: '#ff9800',
                border: '1px solid #ff9800',
                borderRadius: '20px',
                padding: '0.05rem 0.2rem',
                position: 'absolute',
                top: '0',
                right: '0',
                fontSize: '0.7rem',
                marginRight: '-1.5rem',
                marginTop: '0.5rem',
                }" 
            >
            <div>{{ item.rating }}</div>
            <Star :size="10" />
        </div> 
    </div>
</template>

<script>

  import { ref, reactive } from 'vue';
  import LocationIcon from 'vue-material-design-icons/MapMarker.vue'; 
  import Star from 'vue-material-design-icons/Star.vue'; 
  import { images } from '../constants'


  export default {

    name: 'Mini Small Card',
    props: {
        item: {
            type: Object,
        }
    },
    methods: {
    },
    components: {
        Star,
        LocationIcon,
    },

    setup () {
        const doctor = reactive(
            { first_name: "Amine", last_name: "Mohammed", option: "Chirurge dentaire", institut: "CHU Mustapha", location: "Alger", rating: 3, avatar: images.DoctorImg, }
        )
        
        const ratings = ref(1)
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



// Styling
@media screen and (min-width: 500px) { 

    .card-container {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;

        div {
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
            justify-content: center;
            width: 70%;
            gap: 0;

                .details__name {
                    color: var(--color-primary);
                    font-size: 0.7rem;
                }
                .deatils__option {
                    font-size: 0.7rem;
                }             
                
            }
        }

            .details__description {
                font-size: 0.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                flex-wrap: wrap;
                color: var(--color-gray-500);
            }

    }

}

.card__ratings-stars {
}

.vue3-star-ratings__wrapper {
    margin: 0;
    padding: 0;
}

</style>