<!-- Child component for Periodic Table-->
<template>
    <v-card class="isotope-cards-container" :elevation="elevation">
        <div class="isotope-cards-title">
            <h4>Isotopes</h4>
        </div>
        <div class="isotopes-cards-content-container">
            <v-container class="isotope-cards-content" v-for="isotope in isotopes" v-bind:key="isotope.id">
                <p class="abundance">{{isotope.abundance}}%</p>
                <v-card  class="card-content modal-card-content" :raised="raised" :style="cardBackground(element)" >
                    <p class="atomic-number">
                        {{element.atomic_number}}
                        <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                    </p>
                    <p class="symbol" :style="symbolColour(element)">{{element.symbol}} </p>
                    <p class="mass-number">{{isotope.mass_number}}</p>
                    <p class="name">{{isotope.isotope_name}}</p>
                </v-card>
                <p class="most-common" v-if="isotope.most_common == true">*Most Common</p>
            </v-container>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'isotopeCards',
    props: {
        element: {
            type: Object,
            required: true
        },
        isotopes: {
            type: Array,
            default: () => []
        },
        elevation: {
            type: Number
        }
    },
    data() {
        return{
            raised: true,
            types: [
                {family: "Alkali Metal", colour: "background-color: #3399ff;"},
                {family: "Alkaline Earth Metal", colour: "background-color: #ff9933;"},
                {family: "Lanthanide", colour: "background-color: #66ffcc;"},
                {family: "Actinide", colour: "background-color: #996600;"},
                {family: "Transition Metal", colour: "background-color: #0000ff;"},
                {family: "Metal", colour: "background-color: #00cc00;"},
                {family: "Metalloid", colour: "background-color: #cc33ff;"},
                {family: "Non-metal", colour: "background-color: #ffff00;"},
                {family: "Halogen", colour: "background-color: #8c8c8c;"},
                {family: "Noble Gas", colour: "background-color: #cc3300;"},
                {family: "Transactinides", colour: "background-color: #ffff99;"}
            ],
            states: [
                {state: "Liquid", colour: "color: #00ff00;", example: "Br"},
                {state: "Gas", colour: "color: #ff00ff;", example: "H"},
                {state: "Solid", colour: "color: #000000;", example: "Li"}
            ]
        }
    },
    methods: {
         cardBackground(element){
            const typesArrayLength = this.types.length;
            for(let i = 0; i < typesArrayLength; i++){
                if(element.e_family == this.types[i].family){
                    return this.types[i].colour;
                }
            }
        },
        symbolColour(element){
            if(element.synthetic == true){
                return 'color: #ff0000';
            }else{
                const statesArrayLength = this.states.length; 
                for(let i = 0; i < statesArrayLength; i++){
                    if(element.state == this.states[i].state){
                        return this.states[i].colour;
                    }
                }
            }
        }
    }
}
</script>

<style scoped>
.isotope-cards-container{
    display: flex;
    flex-flow: column nowrap;
    width: auto;
    text-align: left;
    border-radius: 10px;
    padding-bottom: 5px;
}
.isotopes-cards-content-container{
    display: flex;
    text-align: center;
}
.isotope-cards-title{
    padding: 5px 20px;
}
.isotope-cards-title h4{
    font-size: 1rem;
}
.abundance{
    margin-bottom: 5px;
}
.most-common{
    margin: 0;
    color: #fff;
    font-size: 0.8rem;
}
.card-content{
    min-width: 100px;
}
.card-content p{
    margin-bottom: 0;
}
.card-content .name{
    padding-bottom: 10px;
    margin-bottom: 5px !important;
}
</style>