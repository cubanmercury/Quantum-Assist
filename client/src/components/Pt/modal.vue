<template>
    <!-- <v-dialog width="85%" v-model="modal[element.atomic_number]" dark> -->
    <v-dialog width="85%" v-model="localModal[element.atomic_number]" dark>

        <v-card class="card-modal">

            <span class="card-modal-title">{{element.name}}</span>
            
            <div class="row-1" >
                <v-card  class="card-content modal-card-content" :raised="raised" :style="cardBackground(element)">
                    <p class="atomic-number">
                        {{element.atomic_number}}
                        <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                    </p>
                    <p class="symbol" :style="symbolColour(element)">{{element.symbol}} </p>
                    <p class="mass-number">{{element.mass_number}}</p>
                    <p class="name">{{element.name}}</p>
                </v-card>
            </div>

            <isotopeCards v-bind:element="element" :isotopes="isotopes" />

            <v-card class="card-modal-stats" >
                <span>Element Name: {{element.name}}</span>
                <span>Atomic Symbol: {{element.symbol}}</span>
                <span>Atomic Number: {{element.atomic_number}}</span>
                <span>Relative Atomic Mass: {{element.mass_number}}</span>
                <span>Group: {{element.e_group}}</span>
                <span>Period: {{element.e_period}}</span>
                <span>Radioactive: {{element.radioactive}}</span>
                <span>Block: {{element.block}}</span>
                <span>Abundance: {{element.abundance}}</span>
                <span>Density: {{element.density}}</span>
                <span>Melting Point: {{element.melting_point}}&deg;C</span>
                <span>Boiling Point: {{element.boiling_point}}&deg;C</span>
                <span>Year of Discovery: {{element.year}}</span>
                <span>Ionisation Energy: {{element.ionisation_energy}}</span>
                <span>Electronegativity: {{element.electronegativity}}</span>
                <span>Specific Heat Capacity: {{element.specific_heat_capacity}}</span>
                <span>Electron Configuration: {{element.electron_configuration}}</span>
                <span>Element Family: {{element.e_family}}</span>
                <span>Synthetic: {{element.synthetic}}</span>
                <span>State at room temperature: {{element.state}}</span>
            </v-card>

            <v-card-text>
                {{element.symbol}}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
                footer text/links
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import isotopeCards from './isotopes';

export default {
    components:{
        isotopeCards
    },
    name: "modal",
    props: {
        element:{
            type: Object,
            required: true
        },
        modal: {
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
            localModal: this.modal,
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
.symbol{
    margin: 3px 0;
    font-size: 20px;
    font-weight: 800;
}
.name{
    font-size: 10px;
}
.radioactive{
    width: 15px;
    position: absolute;
    right: 5px;
}  
.card-modal{
    padding: 25px;
    border-radius: 15px;
}
.card-modal-title{
    font-size: 2rem;
    text-align: center;
}
.modal-card-content{
    width: 7%;
    margin: 0 15px;
    border-radius: 5px !important;
    color: #000 !important;
}
.card-modal-stats{
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    width: 35%;
    margin: 15px;
    padding: 15px;
    border-radius: 5px;
}
</style>