
<template>
    <div class="card-container" v-if="item" >
        <div class="card__img">
            <img :src="item.avatar" alt="avatar" />
            <div class="card__divider">
                <span></span>
            </div>
        </div>
        <div class="card__details">
            <div class="details__name ">Dr.{{ item.first_name }} {{ item.last_name }}</div>
            <div class="deatils__option">{{ item.option }}</div>
            <div class="details__institut">{{ item.institut }}</div>
            <div class="details__loaction">
                <LocationIcon size="14" />
                <span>{{ item.location}} </span>
            </div>         
        </div> 
        <span class="rating__title" > Rating </span>
        <div class="card__rating-details">
            <div class="rating-details__left">
                <span class="rating-left__title" > Rating </span>
                <span class="rating-left__number"> {{ item.rating }} </span>
                <StarRatings calss="ratings__stars" v-model="item.rating" :showControl="false" height="1rem" :starSize="7" starColor="#ff9800" />           
                <span class="rating-left__all">50000</span>
            </div>
            <div class="rating-details__right">
                <div class="rating-left__tube">
                    <span class="tube__number">5</span>
                    <BarChart class="tube__chart" :amount="100" />
                </div>
                <div class="rating-left__tube">
                    <span class="tube__number">2</span>
                    <BarChart class="tube__chart" :amount="40" />
                </div>
                <div class="rating-left__tube">
                    <span class="tube__number">2</span>
                    <BarChart class="tube__chart" :amount="40" />
                </div>
                <div class="rating-left__tube">
                    <span class="tube__number">1</span>
                    <BarChart class="tube__chart" :amount="20" />
                </div>
                <div class="rating-left__tube">
                    <span class="tube__number">3</span>
                    <BarChart class="tube__chart" :amount="60" />
                </div>
            </div>
        </div> 
        <div class="card__actions">
            <button class="actions__btn">Prendre rendez-vous</button>
        </div>
    </div>
</template>

<script>

  import { ref, reactive } from 'vue';
  import LocationIcon from 'vue-material-design-icons/MapMarker.vue'; 
  import StarRatings from "vue3-star-ratings";
  import { images } from '../constants'
  import BarChart from "../components/BarChart.vue";



  export default {

    name: 'Card',
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
        BarChart,
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



// Styling
@media screen and (min-width: 500px) {

    .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 1rem;
        position: relative;
        margin-left: 15%;

        .card__img {
            width: 50%;
            display: flex;
            position: absolute;
            top: -15%;
            left: -15%;

            img {
                width: 100%;
                height: 100%;
                border-radius: 10%;

               
            }
        }

        .card__divider {
            position: relative;
            display: flex;
            align-items: flex-end;

            width: 4px;
            height: 5rem;

            span {
                position: absolute;
                bottom: 0;
                width: 2px;
                height: 60%;
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
            align-items:flex-start;
            justify-content: flex-start;
            width: 70%;
            margin-left: 50%;
            margin-top: -5%;

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
                justify-content: flex-start;
                align-items: center;
                width: 100%;
            }

            
        }

        .rating__title {
            padding-top: 2rem;
            color: var(--color-gray-500);
            font-weight: 200;
            font-size: 1.5rem;
        }

        .card__rating-details {
                display: flex;
                justify-content: space-between;
                gap: 1.5rem;
                padding: 1rem;
            .rating-details__left {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;

                .rating-left__title {
                    display: none;
                }
                
                .rating-left__number {
                    color: var(--color-gray-500);
                    font-weight: 400;
                    font-size: 2rem;
                    padding: 0;
                    margin: 0;
                    color: var(--color-gray-500);
                    font-weight: 200;
                    font-size: 3.5rem;
                }

                span {
                    color: var(--color-gray-500);
                    font-weight: 100;
                    font-size: 1rem;
                }
                .vue3-star-ratings__wrapper {
                    padding: 0 ;  
                    margin: 0;
                }
            }

            .rating-details__right {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                align-items: center;

                .rating-left__tube {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 0.3rem;
                    width: 100%;
                    .tube__number {
                        color: var(--color-primary);
                        font-size: 0.7rem;
                    }

                    .tube__chart {
                        
                    }
                }
            }
        }

        .card__actions {
            display: none;

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

 }

// FOR MOBILES
@media screen and (max-width: 500px) { 

    .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;

        .card__img {
            width: 50%;
            display: flex;

            img {
                width: 100%;
                height: 100%;
                border-radius: 10%;

               
            }
        }

        .card__divider {
            position: relative;
            display: flex;
            align-items: flex-end;

            width: 4px;
            height: 5rem;

            span {
                position: absolute;
                bottom: 0;
                width: 2px;
                height: 60%;
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
            align-items:center;
            justify-content: center;
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
                margin-top: 0.6rem;
            }
            .details__loaction {
                font-size: 0.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
            }
            
        }

        .rating__title {
            display: none;
        }

        .card__rating-details {
                display: flex;
                justify-content: space-between;
                gap: 1.5rem;
                padding: 1rem;
            .rating-details__left {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;

                .rating-left__title {
                    color: var(--color-gray-500);
                    font-weight: 100;
                    font-size: 0.7rem;
                }
                
                .rating-left__number {
                    color: var(--color-gray-500);
                    font-weight: 400;
                    font-size: 2rem;
                    padding: 0;
                    margin: 0
                }

                span {
                    color: var(--color-gray-500);
                    font-weight: 100;
                    font-size: 0.7rem;
                }
                .vue3-star-ratings__wrapper {
                    padding: 0 ;  
                    margin: 0;
                }
            }

            .rating-details__right {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                align-items: center;

                .rating-left__tube {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 0.3rem;
                    width: 100%;
                    .tube__number {
                        color: var(--color-primary);
                        font-size: 0.7rem;
                    }

                    .tube__chart {
                        
                    }
                }
            }
        }

        .card__actions {

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

}

@media screen and (max-width: 280px) {
    .card-container {

        .card__rating-details {
            justify-content: center;
            flex-wrap: wrap;
        }

        .card__img {
                display: none;

            img {
                display: none;
             }
        }
    }
}

</style>