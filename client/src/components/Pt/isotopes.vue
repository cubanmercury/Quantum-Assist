<template>
    <div class="isotope-cards">
        <v-card  class="card-content isotope-card-content" :raised="raised" :style="cardBackground(element)" v-for="isotope in isotopes" v-bind:key="isotope.id">
            <p class="atomic-number">
                {{element.atomic_number}}
                <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
            </p>
            <p class="symbol" :style="symbolColour(element)">{{element.symbol}} </p>
            <p class="mass-number">{{isotope.mass_number}}</p>
            <p class="name">{{isotope.isotope_name}}</p>
        </v-card>
    </div>
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

</style>