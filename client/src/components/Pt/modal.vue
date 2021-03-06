<template>
    <!-- <v-dialog width="85%" v-model="modal[element.atomic_number]" dark> -->
    <v-dialog width="85%" v-model="localModal[element.atomic_number]" dark>

        <v-card class="card-modal">

            <span class="card-modal-title">{{element.name}}</span>
            
            <div class="row-1" >
                <v-card  class="card-content modal-card-content" :elevation="elevation" :raised="raised" :style="cardBackground(element)">
                    <p class="atomic-number">
                        {{element.atomic_number}}
                        <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                    </p>
                    <p class="symbol" :style="symbolColour(element)">{{element.symbol}} </p>
                    <p class="mass-number">{{element.mass_number}}</p>
                    <p class="name">{{element.name}}</p>
                </v-card>

                <isotopeCards v-bind:element="element" :isotopes="isotopes" :elevation="elevation" />
            </div>

            <v-card class="card-modal-stats" :elevation="elevation" >
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

            <v-divider></v-divider>
            <v-card-text>
                footer text/links
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import isotopeCards from './isotopes';
import api from "../../services/Api";

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
        }
    },
    data() {
        return{
            raised: true,
            elevation: 24,
            localModal: this.modal,
            isotopes: [],
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
        retrieveIsotopes() {
            api.get("/pt/isotopes/" + this.element.atomic_number)
            .then(response => {
                this.isotopes = response.data;
            }).catch(e => {
                console.log("Error retrieving Isotopes from DB: " + e);
            })
        },
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
    },
    beforeMount() {
        this.retrieveIsotopes();
    }
}
</script>

<style scoped>
.card-modal{
    padding: 25px;
    border-radius: 15px;
}
.card-modal-title{
    font-size: 3rem;
    text-align: center;
}
.row-1{
    display: flex;
}
.card-content{
    min-width: 125px;
    width: 10%;
    font-size: 1.2rem;
}
.card-content{
    margin-bottom: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
}
.symbol{
    font-size: 3rem;
}
.name{
    font-size: 1.2rem;
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
.v-dialog__content{
    justify-content: flex-end !important;
}
</style>