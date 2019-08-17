<template>
    <div class="container d-flex align-center" style="flex-direction: column;">
        <div class="render-elements md2">
            <v-btn depressed small color="primary" @click="retrieveElements">get elements</v-btn>
        </div>
        
        <v-container class="element-card-container d-flex">
            <div class="pt-row row-1 d-flex">
                <v-container class="element-card" v-for="(element, index) in rowOneElements" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-2 d-flex">
                <v-container class="element-card" v-for="(element, index) in rowTwoElements" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-3 d-flex">
                <v-container class="element-card" v-for="(element, index) in rowThreeElements" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-4 d-flex">
                <v-container class="element-card" v-for="(element, index) in rowFourElements" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-5 d-flex">
                <v-container class="element-card" v-for="(element, index) in rowFiveElements" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-6 d-flex">
                <v-container class="element-card" v-for="(element, index) in rowSixElementsPartOne" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
                <v-container class="element-card" v-for="(element, index) in rowSixElementsPartTwo" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-7 d-flex">
                <v-container class="element-card" v-for="(element, index) in rowSevenElementsPartOne" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
                <v-container class="element-card" v-for="(element, index) in rowSevenElementsPartTwo" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-lanthanide d-flex">
                <p>Lanthanide Series</p>
                <v-container class="element-card" v-for="(element, index) in rowLanthanide" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
            <div class="pt-row row-actinide d-flex">
                <p>Actinide Series</p>
                <v-container class="element-card" v-for="(element, index) in rowActinide" :key="index">
                    <v-card  class="mx-auto card-content" :raised="raised">
                        <p class="atomic-number">{{element.atomic_number}}
                            <img class="radioactive" v-if="element.radioactive === true" src="../../../public/nuclear.svg" alt="radioactive">
                        </p>
                        <p class="symbol">{{element.symbol}} </p>
                        <p class="mass-number">{{element.mass_number}}</p>
                        <p class="name">{{element.name}}</p>
                    </v-card>
                </v-container>
            </div>
        </v-container>
        
        
    </div>
</template>

<script>
import api from "../../services/Api";
export default {
    name: "ElementCard",
    data() {
        return {
            elements: [],
            raised: true
        };
    },
    methods: {
        retrieveElements() {
            api.get("/pt")
            .then(response => {
                this.elements = response.data;
                console.log(response.data);
            }).catch(e => {
                console.log("The error sits here" + e);
            })
        }
    },
    computed: {
        rowOneElements: function() {
            return this.elements.filter(function(element) {
                return element.atomic_number <= 2;
            })
        },
        rowTwoElements: function() {
            return this.elements.filter(function(element) {
                return element.atomic_number > 2 && element.atomic_number <= 10;
            })
        },
        rowThreeElements: function() {
            return this.elements.filter(function(element) {
                return element.atomic_number > 10 && element.atomic_number <= 18;
            })
        },
        rowFourElements: function(){
            return this.elements.filter(function(element) {
                return element.atomic_number > 18 && element.atomic_number <= 36;
            })
        },
        rowFiveElements: function(){
            return this.elements.filter(function(element) {
                return element.atomic_number > 36 && element.atomic_number <= 54;
            })
        },
        rowSixElementsPartOne: function(){
            return this.elements.filter(function(element) {
                return element.atomic_number > 54 && element.atomic_number <= 57;
            })
        },
        rowSixElementsPartTwo: function(){
            return this.elements.filter(function(element) {
                return element.atomic_number >= 72 && element.atomic_number <= 86;
            })
        },
        rowSevenElementsPartOne: function() {
            return this.elements.filter(function(element) {
                return element.atomic_number > 86 && element.atomic_number <= 89;
            })
        },
        rowSevenElementsPartTwo: function() {
            return this.elements.filter(function(element) {
                return element.atomic_number >= 104 && element.atomic_number <= 118;
            })
        },
        rowLanthanide: function(){
            return this.elements.filter(function(element) {
                return element.atomic_number >= 58 && element.atomic_number <= 71;
            })
        },
        rowActinide: function() {
            return this.elements.filter(function(element) {
                return element.atomic_number >=90 && element.atomic_number <= 103;
            })
        }
    }
}
</script>

<style scoped>
    p{
        margin: 0;
        padding: 0;
    }
    .container{
        max-width: 100%;
    }
    .symbol{
        margin: 10px 0;
    }
    .e-config{
        font-size: 12px;
    }
    .pt-row{
        width: 100%;
        justify-content: space-between;
    }
    .row-1{
        justify-content: space-between;
    }
    .row-lanthanide > p,
    .row-actinide > p{
        max-width: 175px;
    }
    .element-card-container{
        flex-flow: column nowrap;
        max-width: 1750px;
        width: 100%;
        justify-content: center;
    }
    .element-card{
        max-width: 90px;
    }
    .element-card .card-content{
        font-size: 14px;
        padding: 5px;
    }
    .radioactive{
        width: 15px;
    }
</style>